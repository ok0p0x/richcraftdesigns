export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#top" className="brand">
          <span className="brand-mark">R</span>
          <span>
            <strong>Rich Craft Designs</strong>
            <small>WOOD • METAL • LASER</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#custom">Custom Orders</a>
        </div>
      </nav>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Custom handcrafted work from Placerville, California</p>

          <h1>
            Custom pieces with sawdust, sparks, and suspiciously precise lasers.
          </h1>

          <p className="hero-text">
            Rich Craft Designs creates engraved slate, custom gaming gear,
            layered wood art, metal decor, and personalized gifts built with
            shop-grade grit and gift-worthy polish.
          </p>

          <div className="button-row">
            <a className="button primary" href="https://www.etsy.com/shop/RichCraftMade">
              Shop Etsy
            </a>

            <a className="button secondary" href="mailto:rich@richcraftdesigns.com">
              Request a Custom Order
            </a>
          </div>
        </div>

        <div className="hero-video-wrapper">
          <video className="hero-video" autoPlay muted loop playsInline>
             <source src="/workshop-hero.mp4" type="video/mp4" />
           </video>
        </div>
      </section>

      <section id="work" className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Project Gallery</p>
          <h2>Custom fandom craftsmanship with lasers, wood, and metal.</h2>
        </div>

        <div className="project-grid">
          <article className="project-card">
            <img src="/projects/enterprise-blueprint.jpg" alt="Enterprise Blueprint" />
            <div className="project-copy">
              <h3>Enterprise Blueprint Artwork</h3>
              <p>Layered blueprint-style artwork inspired by iconic starships and sci-fi engineering aesthetics.</p>
            </div>
          </article>

          <article className="project-card">
            <img src="/projects/falcon-clock.jpg" alt="Falcon Clock" />
            <div className="project-copy">
              <h3>Millennium Falcon Clock</h3>
              <p>Laser-cut fandom clocks blending layered wood, engraving, and collector-display energy.</p>
            </div>
          </article>

          <article className="project-card">
            <img src="/projects/layered-light-art.jpg" alt="Layered Art" />
            <div className="project-copy">
              <h3>Layered Illuminated Artwork</h3>
              <p>Multi-layer LED-enhanced artwork designed to glow with depth and shadow.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
