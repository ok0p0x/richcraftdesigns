import fs from "fs";
import path from "path";

function getYardArtImages() {
  const projectsDir = path.join(process.cwd(), "public", "projects");

  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  return fs
    .readdirSync(projectsDir)
    .filter((file) => file.toLowerCase().endsWith(".jpg"))
    .filter((file) => file.includes("Product Staging"))
    .sort()
    .map((file) => ({
      file,
      src: `/projects/${encodeURIComponent(file)}`,
    }));
}

export default function YardArtPage() {
  const yardArt = getYardArtImages();

  return (
    <main>
      <header className="site-header">
        <a href="/" className="brand">
          <span className="brand-mark">R</span>
          <span className="brand-text">
            <strong>Rich Craft Designs</strong>
            <small>Wood • Metal • Laser</small>
          </span>
        </a>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/#work">Work</a>
          <a href="/#services">Services</a>
          <a href="/custom-order">Custom Orders</a>
        </nav>
      </header>

      <section className="yard-page shell">
        <div className="section-heading yard-heading">
          <p className="eyebrow">Metal Yard Art</p>
          <h1>
            Rustic outdoor pieces staged for cabins, shops, gardens, fences,
            patios, and wide-open spaces.
          </h1>
          <p className="section-subtext">
            These staged examples show the style, finish, and outdoor personality
            we can build around. Pick from existing pieces or use them as a
            starting point for custom metal work.
          </p>
        </div>

        <div className="metal-grid">
          {yardArt.map((image, index) => (
            <article className="metal-card" key={image.file}>
  <img src={image.src} alt={`Metal yard art example ${index + 1}`} />

  <div className="metal-card-actions">
    <a
      className="button secondary small-button"
      href={`/custom-order?item=${encodeURIComponent(
        `Metal Yard Art Example ${index + 1}`
      )}`}
    >
      Request This Piece
    </a>
  </div>
</article>
          ))}
        </div>
      </section>

      <footer className="footer shell">
        <p>Rich Craft Designs • Wood • Metal • Laser</p>
      </footer>
    </main>
  );
}
