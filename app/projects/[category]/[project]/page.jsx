import { notFound } from "next/navigation";
import SiteHeader from "../../../../components/SiteHeader";
import ProjectCard from "../../../../components/ProjectCard";
import { getAllProjects, getProject, getRelatedProjects } from "../../../../lib/gallery";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    category: project.categorySlug,
    project: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { category, project: projectSlug } = await params;
  const project = getProject(category, projectSlug);
  if (!project) notFound();

  const related = getRelatedProjects(project);
  const requestUrl = `/custom-order?item=${encodeURIComponent(project.title)}`;

  return (
    <main>
      <SiteHeader />
      <section className="project-detail-page shell">
        <div className="gallery-breadcrumbs">
          <a href="/gallery">Gallery</a><span>/</span>
          <a href={`/gallery/${project.categorySlug}`}>{project.category}</a>
          <span>/</span><span>{project.title}</span>
        </div>

        <div className="project-detail-hero">
          <div className="project-detail-copy">
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="project-lede">{project.description}</p>
            {project.story ? <p>{project.story}</p> : null}

            <dl className="project-facts">
              {project.materials.length ? <><dt>Materials</dt><dd>{project.materials.join(", ")}</dd></> : null}
              {project.dimensions ? <><dt>Dimensions</dt><dd>{project.dimensions}</dd></> : null}
              {project.price ? <><dt>Pricing</dt><dd>{project.price}</dd></> : null}
            </dl>

            <div className="button-row">
              {project.available && project.squareUrl ? (
                <a className="button primary" href={project.squareUrl}>Buy This Piece</a>
              ) : (
                <a className="button primary" href={requestUrl}>Request Something Similar</a>
              )}
              <a className="button secondary" href={`/gallery/${project.categorySlug}`}>Back to Collection</a>
            </div>
          </div>

          <div className="project-detail-image">
            <img src={project.hero} alt={project.title} />
          </div>
        </div>

        <div className="project-photo-grid">
          {project.images.map((image, index) => (
            <a href={image} target="_blank" rel="noreferrer" key={image}>
              <img src={image} alt={`${project.title} view ${index + 1}`} />
            </a>
          ))}
        </div>

        {related.length ? (
          <section className="related-projects">
            <div className="section-heading">
              <p className="eyebrow">More Inspiration</p>
              <h2>Related projects from the shop.</h2>
            </div>
            <div className="gallery-project-grid">
              {related.map((item) => <ProjectCard project={item} key={item.route} />)}
            </div>
          </section>
        ) : null}
      </section>
    </main>
  );
}
