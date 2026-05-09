const featuredCollections = [
  {
    title: "Gaming & Sci‑Fi",
    subtitle: "Blueprints, fandom builds, clocks, deck boxes, and collector pieces.",
    emoji: "🎲",
  },
  {
    title: "Illuminated Layered Art",
    subtitle: "Dimensional layered builds with lighting, depth, and dramatic contrast.",
    emoji: "💡",
  },
  {
    title: "Custom Gifts & Decor",
    subtitle: "Slate, wood, memorials, cabin decor, and personalized keepsakes.",
    emoji: "🪵",
  },
];

const projects = [
  {
    title: "Enterprise Blueprint Artwork",
    category: "Gaming & Sci‑Fi",
    image: "/projects/enterprise-blueprint.jpg",
    fallback: "🚀",
    description:
      "Layered blueprint-style artwork inspired by iconic starships and sci‑fi engineering aesthetics.",
  },
  {
    title: "Millennium Falcon Clock",
    category: "Gaming & Sci‑Fi",
    image: "/projects/falcon-clock.jpg",
    fallback: "🛰️",
    description:
      "Laser-cut fandom clocks blending layered wood, engraving, and collector-display energy.",
  },
  {
    title: "Layered Illuminated Artwork",
    category: "Illuminated Art",
    image: "/projects/layered-light-art.jpg",
    fallback: "💡",
    description:
      "Multi-layer LED-enhanced artwork designed to glow with depth, texture, and shadow.",
  },
  {
    title: "Engraved Slate Coasters",
    category: "Custom Gifts",
    image: "/projects/slate-coasters.jpg",
    fallback: "☕",
    description:
      "Personalized slate coaster sets for game rooms, cabins, bars, and memorable gifts.",
  },
  {
    title: "Custom Deck Boxes",
    category: "Gaming Gear",
    image: "/projects/deck-box.jpg",
    fallback: "🎴",
    description:
      "Custom laser-crafted deck boxes designed for collectors, tabletop gamers, and commanders.",
  },
  {
    title: "Workshop Process & Builds",
    category: "Behind the Scenes",
    image: "/projects/workshop-process.jpg",
    fallback: "🔥",
    description:
      "The sparks, smoke, stain, assembly, and laser passes that turn raw materials into finished work.",
  },
];

const services = [
  ["Laser Engraving", "Slate, wood, tumblers, plaques, tags, signs, ornaments, gifts, and crisp custom marks."],
  ["Woodworking", "Functional pieces, layered art, tabletop accessories, gaming gear, and one-off builds."],
  ["Metal & Plasma", "Shop decor, signs, decorative cuts, engraved metal, and rugged designs with grit."],
  ["Custom Design", "Bring a rough idea, logo, theme, fandom, joke, or photo. I turn it into something real."],
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-media">
        <img src={project.image} alt={project.title} />
        <div className="fallback-icon">{project.fallback}</div>
        <span>{project.category}</span>
      </div>
      <div className="project-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#top" className="brand">
          <span className="brand-mark">R</span>
          <span>
            <strong>Rich Craft Designs</strong>
            <small>Wood • Metal • Laser</small>
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
          <h1>Custom pieces with sawdust, sparks, and suspiciously precise lasers.</h1>
          <p className="hero-text">
            Rich Craft Designs creates engraved slate, custom gaming gear, layered wood art,
            metal decor, and personalized gifts built with shop-grade grit and gift-worthy polish.
          </p>
          <div className="button-row">
            <a className="button primary" href="https://www.etsy.com/shop/RichCraftMade">
              Shop Etsy
            </a>
            <a className="button secondary" href="mailto:rich@richcraftdesigns.com?subject=Custom%20Order%20Request">
              Request a Custom Order
            </a>
          </div>
        </div>

        <div className="hero-gallery" aria-label="Project photo placeholders">
          <div className="tile tile-one">🪵</div>
          <div className="tile tile-two">🔥</div>
          <div className="tile tile-three">🎲</div>
          <div className="media-note">Replace these with your real project photos and videos.</div>
        </div>
      </section>

      <section className="section-shell collections-section">
        <div className="section-heading">
          <p className="eyebrow">Featured Collections</p>
          <h2>Custom creations built for collectors, gamers, cabins, workshops, and wonderfully specific obsessions.</h2>
          <p>
            Rich Craft Designs blends laser engraving, layered woodworking, fandom-inspired craftsmanship,
            and rugged fabrication into one-of-a-kind custom builds.
          </p>
        </div>

        <div className="collections-grid">
          {featuredCollections.map((collection) => (
            <article key={collection.title} className="collection-card">
              <div className="collection-icon">{collection.emoji}</div>
              <h3>{collection.title}</h3>
              <p>{collection.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section-shell services-grid">
        {services.map(([title, text]) => (
          <article key={title} className="service-card">
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section id="work" className="work-section">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">Project Gallery</p>
            <h2>Photos and process clips that sell the work before the description even clocks in.</h2>
            <p>
              Add your upscaled project photos, short shop videos, product turntables, engraving closeups,
              and before/after shots here.
            </p>
          </div>

          <div className="gallery-banner">
            <div>
              <p className="eyebrow">Real Projects</p>
              <h3>From blueprint artwork and fandom builds to engraved slate and layered LED pieces.</h3>
            </div>
            <div className="gallery-pill-row">
              <span>Laser Engraving</span>
              <span>Woodworking</span>
              <span>Metal Work</span>
              <span>Custom Gifts</span>
              <span>Gaming Decor</span>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="custom" className="section-shell process-section">
        <div className="callout-card">
          <p className="eyebrow dark">Custom Orders</p>
          <h2>Built for gifts, game nights, cabins, shops, and glorious little obsessions.</h2>
          <p>
            From one-off memorial pieces to repeatable product lines, the goal is simple: make something
            personal enough that it refuses to become clutter.
          </p>
        </div>

        <div className="steps">
          <article>
            <strong>01</strong>
            <h3>Send the idea</h3>
            <p>Logos, themes, photos, dimensions, fandoms, inside jokes, or a sketch on a napkin.</p>
          </article>
          <article>
            <strong>02</strong>
            <h3>Approve the design</h3>
            <p>You get a clear concept before the beam starts doing expensive beam things.</p>
          </article>
          <article>
            <strong>03</strong>
            <h3>Get the finished piece</h3>
            <p>Local pickup or shipping depending on the item, timeline, and level of ridiculousness.</p>
          </article>
        </div>
      </section>

      <section className="section-shell process-gallery-section">
        <div className="section-heading">
          <p className="eyebrow">Workshop Process</p>
          <h2>The process matters just as much as the finished piece.</h2>
          <p>
            Lasers firing, stain soaking into grain, layered cuts stacking together, sparks flying from plasma work,
            and the small details that make handcrafted work feel personal.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-card tall">
            <span>🔥</span>
            <h3>Laser & Plasma Work</h3>
            <p>Clean cuts, glowing passes, smoke drift, and precision fabrication.</p>
          </div>

          <div className="process-card">
            <span>🪵</span>
            <h3>Wood Finishing</h3>
            <p>Stain, texture, layered depth, and handcrafted assembly.</p>
          </div>

          <div className="process-card">
            <span>🎨</span>
            <h3>Custom Paint & Fill</h3>
            <p>Color fill, contrast work, and dimensional detailing.</p>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <h2>Ready to turn an idea into sawdust evidence?</h2>
        <p>Start with Etsy, email, or a custom-order form when you are ready to bolt one on.</p>
        <div className="button-row centered">
          <a className="button primary" href="mailto:rich@richcraftdesigns.com?subject=Custom%20Order%20Request">
            Start a Custom Order
          </a>
          <a className="button secondary" href="https://www.etsy.com/shop/RichCraftMade">
            View Current Products
          </a>
        </div>
      </footer>
    </main>
  );
}
