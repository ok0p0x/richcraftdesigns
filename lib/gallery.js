import fs from "fs";
import path from "path";

const ROOT = path.join(process.cwd(), "public", "gallery");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

const humanize = (value = "") =>
  value.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const slugify = (value = "") =>
  value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const isImage = (filename) => IMAGE_EXTENSIONS.has(path.extname(filename).toLowerCase());

function readJson(filePath) {
  try {
    return fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf8"))
      : {};
  } catch {
    return {};
  }
}

function folders(folderPath) {
  if (!fs.existsSync(folderPath)) return [];
  return fs.readdirSync(folderPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function images(folderPath) {
  if (!fs.existsSync(folderPath)) return [];
  return fs.readdirSync(folderPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && isImage(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function publicPath(parts) {
  return "/" + parts.map((part) => encodeURIComponent(part)).join("/");
}

function buildProject(categoryFolder, projectFolder, projectPath, relativeParts) {
  const metadata = readJson(path.join(projectPath, "project.json"));
  const imageNames = images(projectPath);
  if (!imageNames.length) return null;

  const categorySlug = slugify(categoryFolder);
  const projectSlug = slugify(projectFolder);
  const imagePaths = imageNames.map((name) =>
    publicPath(["gallery", ...relativeParts, name])
  );

  return {
    category: metadata.category || humanize(categoryFolder),
    categorySlug,
    slug: projectSlug,
    route: `/projects/${categorySlug}/${projectSlug}`,
    title: metadata.title || humanize(projectFolder),
    description:
      metadata.description ||
      `A handcrafted Rich Craft Designs project from the ${humanize(categoryFolder)} collection.`,
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
  };
}

export function getAllProjects() {
  if (!fs.existsSync(ROOT)) return [];
  const projects = [];

  for (const categoryFolder of folders(ROOT)) {
    const categoryPath = path.join(ROOT, categoryFolder);
    const childFolders = folders(categoryPath);

    for (const projectFolder of childFolders) {
      const projectPath = path.join(categoryPath, projectFolder);
      const project = buildProject(
        categoryFolder,
        projectFolder,
        projectPath,
        [categoryFolder, projectFolder]
      );
      if (project) projects.push(project);
    }

    if (images(categoryPath).length) {
      const project = buildProject(
        categoryFolder,
        categoryFolder,
        categoryPath,
        [categoryFolder]
      );
      if (project) projects.push(project);
    }
  }

  return projects.sort((a, b) => a.title.localeCompare(b.title));
}

export function getCategories() {
  const map = new Map();

  for (const project of getAllProjects()) {
    if (!map.has(project.categorySlug)) {
      map.set(project.categorySlug, {
        name: project.category,
        slug: project.categorySlug,
        count: 0,
        hero: project.hero,
      });
    }

    const category = map.get(project.categorySlug);
    category.count += 1;
    if (project.featured) category.hero = project.hero;
  }

  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export const getProjectsByCategory = (categorySlug) =>
  getAllProjects().filter((project) => project.categorySlug === categorySlug);

export const getProject = (categorySlug, projectSlug) =>
  getAllProjects().find(
    (project) =>
      project.categorySlug === categorySlug && project.slug === projectSlug
  ) || null;

export const getRelatedProjects = (project, limit = 3) =>
  getAllProjects()
    .filter(
      (candidate) =>
        candidate.route !== project.route &&
        (candidate.categorySlug === project.categorySlug ||
          candidate.tags.some((tag) => project.tags.includes(tag)))
    )
    .slice(0, limit);
