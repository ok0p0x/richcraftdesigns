import manifest from "../public/gallery-manifest.json";

export function getAllProjects() {
  return manifest.projects || [];
}

export function getCategories() {
  return manifest.categories || [];
}

export function getProjectsByCategory(categorySlug) {
  return getAllProjects().filter((project) => project.categorySlug === categorySlug);
}

export function getProject(categorySlug, projectSlug) {
  return getAllProjects().find(
    (project) =>
      project.categorySlug === categorySlug &&
      project.slug === projectSlug
  ) || null;
}

export function getRelatedProjects(project, limit = 3) {
  return getAllProjects()
    .filter(
      (candidate) =>
        candidate.route !== project.route &&
        (candidate.categorySlug === project.categorySlug ||
          candidate.tags.some((tag) => project.tags.includes(tag)))
    )
    .slice(0, limit);
}
