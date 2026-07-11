import fs from "fs";
import path from "path";

const root = path.join(process.cwd(), "public", "gallery");
const output = path.join(process.cwd(), "public", "gallery-manifest.json");
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

const humanize = (value = "") =>
  value.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const slugify = (value = "") =>
  value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const isImage = (filename) =>
  imageExtensions.has(path.extname(filename).toLowerCase());

function readJsonSafe(filePath) {
  try {
    return fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf8"))
      : {};
  } catch {
    return {};
  }
}

function publicPath(parts) {
  return "/" + parts.map((part) => encodeURIComponent(part)).join("/");
}

function walk(directory, relativeParts = []) {
  if (!fs.existsSync(directory)) return [];

  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const imageNames = entries
    .filter((entry) => entry.isFile() && isImage(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const projects = [];

  if (imageNames.length && relativeParts.length) {
    const metadata = readJsonSafe(path.join(directory, "project.json"));
    const categoryFolder = relativeParts[0];
    const projectFolder = relativeParts.at(-1);
    const categorySlug = slugify(categoryFolder);
    const projectSlug = slugify(relativeParts.slice(1).join("-") || projectFolder);
    const imagePaths = imageNames.map((filename) =>
      publicPath(["gallery", ...relativeParts, filename])
    );

    projects.push({
      category: metadata.category || humanize(categoryFolder),
      categorySlug,
      slug: projectSlug,
      route: `/projects/${categorySlug}/${projectSlug}`,
      title: metadata.title || humanize(projectFolder),
      description: metadata.description || `A handcrafted Rich Craft Designs project from the ${humanize(categoryFolder)} collection.`,
      story: metadata.story || "",
      materials: Array.isArray(metadata.materials) ? metadata.materials : [],
      dimensions: metadata.dimensions || "",
      tags: Array.isArray(metadata.tags) ? metadata.tags : [],
      featured: Boolean(metadata.featured),
      available: Boolean(metadata.available),
      price: metadata.price || "",
      squareUrl: metadata.squareUrl || "",
      hero: metadata.hero
        ? publicPath(["gallery", ...relativeParts, metadata.hero])
        : imagePaths[0],
      images: imagePaths,
    });
  }

  for (const entry of entries) {
    if (entry.isDirectory()) {
      projects.push(...walk(path.join(directory, entry.name), [...relativeParts, entry.name]));
    }
  }

  return projects;
}

const projects = walk(root).sort((a, b) => a.title.localeCompare(b.title));
const categoriesMap = new Map();

for (const project of projects) {
  if (!categoriesMap.has(project.categorySlug)) {
    categoriesMap.set(project.categorySlug, {
      name: project.category,
      slug: project.categorySlug,
      count: 0,
      hero: project.hero,
    });
  }
  const category = categoriesMap.get(project.categorySlug);
  category.count += 1;
  if (project.featured) category.hero = project.hero;
}

fs.writeFileSync(output, JSON.stringify({
  generatedAt: new Date().toISOString(),
  categories: Array.from(categoriesMap.values()).sort((a, b) => a.name.localeCompare(b.name)),
  projects,
}, null, 2));

console.log(`Gallery manifest created with ${projects.length} projects.`);
