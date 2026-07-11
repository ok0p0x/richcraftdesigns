export default function SiteHeader() {
  return (
    <header className="site-header">
      <a href="/" className="brand">
        <span className="brand-mark">R</span>
        <span className="brand-text">
          <strong>Rich Craft Designs</strong>
          <small>Handcrafted • Custom • Built to Last</small>
        </span>
      </a>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/yard-art">Yard Art</a>
        <a href="/custom-order">Start a Project</a>
      </nav>
    </header>
  );
}
