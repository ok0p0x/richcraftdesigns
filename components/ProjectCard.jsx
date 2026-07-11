export default function ProjectCard({ project }) {
  const requestUrl = `/custom-order?item=${encodeURIComponent(project.title)}`;

  return (
    <article className="gallery-project-card">
      <a href={project.route} className="gallery-project-image">
        <img src={project.hero} alt={project.title} />
      </a>
      <div className="gallery-project-copy">
        <p className="gallery-kicker">{project.category}</p>
        <h3><a href={project.route}>{project.title}</a></h3>
        <p>{project.description}</p>
        {project.price ? <strong className="gallery-price">{project.price}</strong> : null}
        <div className="gallery-card-actions">
          <a className="button secondary small-button" href={project.route}>View Project</a>
          <a className="button primary small-button" href={requestUrl}>Request Similar</a>
        </div>
      </div>
    </article>
  );
}
