const projects = [
  {
    title: "Custom Commander Deck Boxes",
    category: "Gaming Gear",
    image: "/projects/deck-box.jpg",
    fallback: "🎲",
    description:
      "Personalized deck boxes for people who sleeve cards, summon chaos, and still appreciate clean craftsmanship.",
  },
  {
    title: "Engraved Slate Coasters",
    category: "Slate Engraving",
    image: "/projects/slate-coasters.jpg",
    fallback: "☕",
    description:
      "Gift-ready slate coasters with sharp engraving for cabins, bars, game rooms, and dangerously classy coffee tables.",
  },
  {
    title: "Layered Wood Wall Art",
    category: "Woodwork",
    image: "/projects/layered-art.jpg",
    fallback: "🪵",
    description:
      "Dimensional laser-cut wall art with stain, shadow, texture, and enough depth to make a flat wall feel unemployed.",
  },
  {
    title: "Metal Signs & Plasma Work",
    category: "Metal Work",
    image: "/projects/metal-sign.jpg",
    fallback: "⚒️",
    description:
      "Rugged shop signs, decorative cuts, engraved metal pieces, and powder-fill accents with sparks in their DNA.",
  },
  {
    title: "Custom Cabin Gifts",
    category: "Personalized Gifts",
    image: "/projects/cabin-gift.jpg",
    fallback: "🌲",
    description:
      "Personal pieces for retirement, cabins, family milestones, lake life, and the occasional Bigfoot-related situation.",
  },
  {
    title: "Workshop Process Videos",
    category: "Behind the Beam",
    image: "/projects/workshop-video.jpg",
    fallback: "🔥",
    description:
      "Short clips of test burns, engraving passes, plasma cuts, sanding, staining, and tiny shop victories.",
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
