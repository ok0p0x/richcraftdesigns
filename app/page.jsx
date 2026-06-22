const projects = [
  {
    title: "Enterprise Blueprint Artwork",
    category: "Sci-Fi / Collector Art",
    image: "/projects/enterprise-blueprint.jpg",
    description:
      "Layered blueprint-style artwork inspired by iconic starship engineering and clean display-piece design.",
  },
  {
    title: "Millennium Falcon Clock",
    category: "Gaming & Sci-Fi Decor",
    image: "/projects/falcon-clock.jpg",
    description:
      "Laser-cut fandom clocks blending layered wood, engraving, and collector-display energy.",
  },
  {
    title: "Layered Illuminated Artwork",
    category: "Illuminated Art",
    image: "/projects/layered-light-art.jpg",
    description:
      "Multi-layer LED-enhanced artwork designed to glow with depth, contrast, and shadow.",
  },
  {
    title: "Engraved Slate Coasters",
    category: "Custom Gifts",
    image: "/projects/slate-coasters.jpg",
    description:
      "Personalized slate coaster sets for game rooms, cabins, bars, and memorable gifts.",
  },
  {
    title: "Custom Deck Boxes",
    category: "Gaming Gear",
    image: "/projects/deck-box.jpg",
    description:
      "Custom laser-crafted boxes designed for collectors, tabletop gamers, and commanders.",
  },
  {
    title: "Workshop Process",
    category: "Behind the Scenes",
    image: "/projects/workshop-process.jpg",
    description:
      "The sparks, smoke, stain, assembly, and laser passes that turn raw material into finished work.",
  },
];

const metalYardArt = Array.from({ length: 44 }, (_, i) => {
  return `/projects/Metal-Yard-Art (${i + 1}).jpg`;
});

const services = [
  {
    title: "Laser Engraving",
    text:
      "Wood, slate, signs, gifts, plaques, decor, gaming accessories, and crisp personalized details.",
  },
  {
    title: "Woodworking",
    text:
      "Layered art, display pieces, home decor, tabletop accessories, and custom-built keepsakes.",
  },
  {
    title: "Metal & Plasma",
    text:
      "Decorative cuts, shop pieces, rugged signs, metal accents, yard art, and outdoor pieces with a little spark baked in.",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-copy">
        <p>{project.category}</p>
        <h3>{project.title}</h3>
        <span>{project.description}</span>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand">
          <span className="brand-mark">R</span>
          <span className="brand-text">
            <strong>Rich Craft Designs</strong>
            <small>Wood • Metal • Laser</small>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#metal-work">Metal Yard Art</a>
          <a href="#services">Services</a>
          <a href="#custom">Custom Orders</a>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Handcrafted in Placerville, California</p>
          <h1>Custom laser, wood, and metal work for people who want something personal.</h1>

          <p className="hero-text">
            Every project starts as a rough idea, sketch, fandom, logo, memory, or problem to solve.
            Rich Craft Designs specializes in custom laser, wood, metal, and illuminated creations
            built around your ideas, interests, and spaces. Many of the pieces featured throughout
            the site are available for purchase and also serve as examples of the shop’s custom
            design and fabrication capabilities.
          </p>

          <div className="button-row">
            <a
              className="button primary"
              href="mailto:rich@richcraftdesigns.com?subject=Custom%20Order%20Request"
            >
              Request Custom Work
            </a>
            <a className="button secondary" href="https://www.etsy.com/shop/RichCraftMade">
              Shop Etsy
            </a>
          </div>
        </div>

        <div className="hero-video-wrapper">
          <video className="hero-video" autoPlay muted loop playsInline preload="auto">
            <source src="/workshop-hero.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="intro-strip shell">
        <div>
          <strong>Custom-first</strong>
          <span>Most work starts with your idea, space, theme, logo, fandom, or rough sketch.</span>
        </div>
        <div>
          <strong>Built in the shop</strong>
          <span>Laser engraving, woodworking, plasma cutting, finishing, lighting, and assembly.</span>
        </div>
        <div>
          <strong>Examples for sale</strong>
          <span>Finished pieces may be available, but they also show what can be customized.</span>
        </div>
      </section>

      <section id="work" className="work-section shell">
        <div className="section-heading">
          <p className="eyebrow">Featured Work</p>
          <h2>Real projects, clean details, and enough shop grit to prove it was built, not printed.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="metal-work" className="metal-section shell">
        <div className="section-heading">
          <p className="eyebrow">Metal Yard Art</p>
          <h2>Rustic outdoor pieces staged for cabins, shops, gardens, fences, patios, and wide-open spaces.</h2>
          <p className="section-subtext">
            These staged examples show the style, finish, and outdoor personality we can build around.
            Pick from existing pieces or use them as a starting point for custom metal work.
          </p>
        </div>

        <div className="metal-grid">
          {metalYardArt.map((image, index) => (
            <article className="metal-card" key={image}>
              <img src={image} alt={`Metal yard art example ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="services-section shell">
        <div className="section-heading compact">
          <p className="eyebrow">Shop Capabilities</p>
          <h2>Small-batch custom work with a wide creative range.</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="custom" className="custom-section shell">
        <div className="custom-card">
          <p className="eyebrow">Custom Orders</p>
          <h2>Have an idea? Send the rough version. The polished version starts here.</h2>
          <p>
            Logos, themes, photos, fandoms, names, dates, dimensions, cabin ideas,
            tabletop gear, memorial pieces, yard art, and oddball concepts are all fair game.
          </p>

          <div className="button-row">
            <a
              className="button primary"
              href="mailto:rich@richcraftdesigns.com?subject=Custom%20Order%20Request"
            >
              Start a Custom Order
            </a>
            <a className="button secondary" href="https://www.etsy.com/shop/RichCraftMade">
              View Etsy Shop
            </a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <p>Rich Craft Designs • Wood • Metal • Laser</p>
      </footer>
    </main>
  );
}
