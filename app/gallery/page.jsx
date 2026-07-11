import SiteHeader from "../../components/SiteHeader";
import ProjectCard from "../../components/ProjectCard";
import { getAllProjects, getCategories } from "../../lib/gallery";

export default function GalleryPage() {
  const categories = getCategories();
  const projects = getAllProjects();

  return (
    <main>
      <SiteHeader />
      <section className="gallery-page shell">
        <div className="section-heading gallery-intro">
          <p className="eyebrow">Inspiration Gallery</p>
          <h1>Everything here started as an idea.</h1>
          <p className="section-subtext">
            Browse past projects by collection. See something that sparks an idea?
            Open it and request something similar, customized for you.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <a className="category-card" href={`/gallery/${category.slug}`} key={category.slug}>
              <img src={category.hero} alt={category.name} />
              <div className="category-overlay">
                <h2>{category.name}</h2>
                <span>{category.count} {category.count === 1 ? "project" : "projects"}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="section-heading gallery-all-heading">
          <p className="eyebrow">All Projects</p>
          <h2>Browse the full workshop archive.</h2>
        </div>

        {projects.length ? (
          <div className="gallery-project-grid">
            {projects.map((project) => <ProjectCard project={project} key={project.route} />)}
          </div>
        ) : (
          <div className="empty-gallery">
            No projects were found. Add images under <strong>public/gallery</strong>.
          </div>
        )}
      </section>
    </main>
  );
}
