import { notFound } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import ProjectCard from "../../../components/ProjectCard";
import { getCategories, getProjectsByCategory } from "../../../lib/gallery";

export function generateStaticParams() {
  return getCategories().map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categoryInfo = getCategories().find((item) => item.slug === category);
  if (!categoryInfo) notFound();

  const projects = getProjectsByCategory(category);

  return (
    <main>
      <SiteHeader />
      <section className="gallery-page shell">
        <div className="gallery-breadcrumbs">
          <a href="/gallery">Gallery</a><span>/</span><span>{categoryInfo.name}</span>
        </div>

        <div className="section-heading">
          <p className="eyebrow">Collection</p>
          <h1>{categoryInfo.name}</h1>
          <p className="section-subtext">
            Browse past work, then request something similar or use it as inspiration.
          </p>
        </div>

        <div className="gallery-project-grid">
          {projects.map((project) => <ProjectCard project={project} key={project.route} />)}
        </div>
      </section>
    </main>
  );
}
