const signatureCreations = [
  {
    title: "Wine Tasting Station",
    category: "Furniture & Entertaining",
    image: "/products/wine-tasting-station-1.jpg",
    description: "A handcrafted centerpiece designed for wine rooms, bars, tasting spaces, and custom entertaining areas.",
  },
  {
    title: "Lighted Oak Bar Display",
    category: "Signature Woodworking",
    image: "/projects/lighted-oak-bar-display.jpg",
    description: "An illuminated mirrored bar shelf built from oak harvested from our own property.",
  },
  {
    title: "Custom Recognition Display Case",
    category: "Legacy & Recognition",
    image: "/projects/recognition-display-case.jpg",
    description: "A handcrafted display case designed to celebrate careers, milestones, awards, memories, and keepsakes.",
  },
];

const collections = [
  {
    title: "Furniture & Entertaining",
    image: "/collections/furniture-entertaining.jpg",
    description: "Wine stations, bar displays, serving pieces, kitchen items, and custom furniture built for gathering spaces.",
    link: "/custom-order?item=Furniture%20and%20Entertaining",
  },
  {
    title: "Home & Cabin Decor",
    image: "/collections/home-cabin-decor.jpg",
    description: "Clocks, wall art, shelves, rustic decor, signs, pallet wood pieces, and one-of-a-kind home accents.",
    link: "/custom-order?item=Home%20and%20Cabin%20Decor",
  },
  {
    title: "Gaming & Fandom",
    image: "/collections/gaming-fandom.jpg",
    description: "MTG accessories, deck boxes, sci-fi art, themed displays, and custom pieces for collectors and game rooms.",
    link: "/custom-order?item=Gaming%20and%20Fandom",
  },
  {
    title: "Outdoor & Garden",
    image: "/collections/outdoor-garden.jpg",
    description: "Garden stakes, hanging planters, metal yard art, patio pieces, outdoor signs, and rustic property decor.",
    link: "/yard-art",
  },
  {
    title: "Personalized Gifts",
    image: "/collections/personalized-gifts.jpg",
    description: "Coasters, keychains, pens, holiday items, rings, keepsakes, and gifts made personal.",
    link: "/custom-order?item=Personalized%20Gift",
  },
  {
    title: "Custom Fabrication",
    image: "/collections/custom-fabrication.jpg",
    description: "Functional builds, metalwork, illuminated installations, property solutions, and oddball ideas made real.",
    link: "/custom-order?item=Custom%20Fabrication",
  },
  {
    title: "Legacy & Recognition",
    image: "/collections/legacy-recognition.jpg",
    description: "Retirement gifts, shadow boxes, award displays, memorial pieces, and handcrafted keepsake displays.",
    link: "/custom-order?item=Legacy%20and%20Recognition%20Piece",
  },
  {
    title: "Illuminated Art",
    image: "/collections/illuminated-art.jpg",
    description: "Layered wood art, LED displays, glowing wall pieces, and custom lighted statement projects.",
    link: "/custom-order?item=Illuminated%20Art",
  },
];

const processSteps = [
  { title: "Share the idea", text: "Send a sketch, photo, theme, fandom, memory, problem, or rough napkin drawing." },
  { title: "Shape the design", text: "We talk through size, materials, budget, finish, lighting, engraving, and function." },
  { title: "Build it in the shop", text: "Wood, metal, laser work, finishing, LEDs, assembly, and plenty of sawdust happen here." },
  { title: "Make it yours", text: "The finished piece is built around your space, your story, and your reason for wanting it." },
];

function SignatureCard({ item }) {
  return (
    <article className="project-card signature-card">
      <div className="project-image-wrap">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="project-copy">
        <p>{item.category}</p>
        <h3>{item.title}</h3>
        <span>{item.description}</span>
        <a className="button secondary small-button" href={`/custom-order?item=${encodeURIComponent(item.title)}`}>
          Request Something Similar
        </a>
      </div>
    </article>
  );
}

function CollectionCard({ collection }) {
  return (
    <article className="collection-card">
      <div className="collection-image-wrap">
        <img src={collection.image} alt={collection.title} />
      </div>
      <div className="collection-copy">
        <h3>{collection.title}</h3>
        <p>{collection.description}</p>
        <a className="button secondary small-button" href={collection.link}>
          Explore / Request
        </a>
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
            <small>Handcrafted • Custom • Built to Last</small>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#collections">Collections</a>
          <a href="#signature">Signature Work</a>
          <a href="/yard-art">Yard Art</a>
          <a href="/custom-order">Start a Project</a>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Northern California custom workshop</p>
          <h1>Handcrafted creations built around your ideas, passions, and spaces.</h1>
          <p className="hero-text">
            Rich Craft Designs creates custom wood, metal, laser, and illuminated pieces for homes,
            cabins, businesses, game rooms, outdoor spaces, gifts, recognition displays, and the
            ideas that do not fit neatly in a box.
          </p>
          <div className="button-row">
            <a className="button primary" href="/custom-order">Start Your Project</a>
            <a className="button secondary" href="#collections">Browse What We Build</a>
          </div>
        </div>

        <div className="hero-video-wrapper">
          <video className="hero-video" autoPlay muted loop playsInline preload="auto">
            <source src="/workshop-hero.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="intro-strip shell">
        <div><strong>Custom-first</strong><span>Most projects start with your idea, space, theme, logo, fandom, memory, or rough sketch.</span></div>
        <div><strong>Built in the shop</strong><span>Woodworking, metalwork, laser engraving, plasma cutting, LEDs, finishing, and assembly.</span></div>
        <div><strong>Examples for inspiration</strong><span>Finished pieces may be available, but they also show what can be customized for you.</span></div>
      </section>

      <section id="collections" className="collections-section shell">
        <div className="section-heading">
          <p className="eyebrow">What can we create?</p>
          <h2>From small personalized gifts to full custom statement pieces, the shop is built for range.</h2>
        </div>
        <div className="collection-grid">
          {collections.map((collection) => (
            <CollectionCard key={collection.title} collection={collection} />
          ))}
        </div>
      </section>

      <section id="signature" className="signature-section shell">
        <div className="section-heading">
          <p className="eyebrow">Signature Creations</p>
          <h2>A few larger builds that show the kind of custom work Rich Craft Designs can take on.</h2>
        </div>
        <div className="project-grid">
          {signatureCreations.map((item) => (
            <SignatureCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="story-teaser shell">
        <div className="custom-card story-card">
          <p className="eyebrow">Built from the ground up</p>
          <h2>The workshop behind Rich Craft Designs was rebuilt after the 2021 Caldor Fire.</h2>
          <p>
            After losing our home, workshop, tools, and years of finished creations, we rebuilt from the ground up.
            Today, every project is created in a Northern California shop shaped by craftsmanship, resilience,
            and a stubborn need to keep building.
          </p>
          <div className="button-row">
            <a className="button secondary" href="/custom-order?item=Custom%20Project">Start Your Project</a>
          </div>
        </div>
      </section>

      <section className="process-section shell">
        <div className="section-heading">
          <p className="eyebrow">How custom work starts</p>
          <h2>You do not need a perfect plan. You just need the beginning of an idea.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="service-card process-card" key={step.title}>
              <span className="process-number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="custom-section shell">
        <div className="custom-card final-cta">
          <p className="eyebrow">Have an idea?</p>
          <h2>If you can imagine it, we can probably build it.</h2>
          <p>
            Tell us what you are picturing. It can be a product you saw here, a photo, a sketch,
            a story, a theme, or a strange little idea that has been rattling around in your head.
          </p>
          <div className="button-row">
            <a className="button primary" href="/custom-order">Start Your Project</a>
            <a className="button secondary" href="/yard-art">Browse Yard Art</a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <p>Rich Craft Designs • Wood • Metal • Laser • Custom Fabrication</p>
      </footer>
    </main>
  );
}
