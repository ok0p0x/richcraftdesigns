export default function CustomOrderPage({ searchParams }) {
  const requestedItem = searchParams?.item || "";
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
          <a href="/yard-art">Yard Art</a>
          <a href="/#services">Services</a>
        </nav>
      </header>

      <section className="form-page shell">
        <div className="form-intro">
          <p className="eyebrow">Custom Order Request</p>
          <h1>Tell me what you want built.</h1>
          <p>
            Rough ideas are welcome. Send the concept, size, material preference,
            deadline, budget range, and any inspiration you already have. I’ll review
            it and follow up.
          </p>
        </div>

        <form
          className="custom-order-form"
          action="https://formspree.io/f/mkolnyqe"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            <label>
  Requested Item / Inspiration Piece
  <input
    name="requested_item"
    type="text"
    defaultValue={requestedItem}
    placeholder="Optional"
  />
</label>
            value="New Rich Craft Designs Custom Order Request"
          />

          <div className="form-grid">
            <label>
              Name
              <input name="name" type="text" required placeholder="Your name" />
            </label>

            <label>
              Email
              <input name="email" type="email" required placeholder="you@example.com" />
            </label>

            <label>
              Phone
              <input name="phone" type="tel" placeholder="Optional" />
            </label>

            <label>
              Project Type
              <select name="project_type" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Laser engraving</option>
                <option>Woodworking</option>
                <option>Metal yard art</option>
                <option>LED / illuminated art</option>
                <option>Gaming / fandom piece</option>
                <option>Memorial / gift</option>
                <option>Other custom idea</option>
              </select>
            </label>

            <label>
              Approximate Size
              <input name="size" type="text" placeholder={'Example: 12" x 18", 3 ft tall, etc.'} />
            </label>

            <label>
              Budget Range
              <select name="budget" defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Under $100</option>
                <option>$100 - $250</option>
                <option>$250 - $500</option>
                <option>$500 - $1,000</option>
                <option>$1,000+</option>
                <option>Not sure yet</option>
              </select>
            </label>
          </div>

          <label>
            Tell me about the project
            <textarea
              name="message"
              rows="8"
              required
              placeholder="Describe the idea, theme, material, where it will be displayed, deadline, and anything else that matters."
            ></textarea>
          </label>

          <label>
            Inspiration link or file link
            <input
              name="inspiration"
              type="text"
              placeholder="Paste a Google Photos, Drive, Pinterest, Etsy, or image link if you have one"
            />
          </label>

          <button className="button primary form-submit" type="submit">
            Send Custom Order Request
          </button>

          <p className="form-note">
            This form sends your request through Formspree to Rich Craft Designs.
          </p>
        </form>
      </section>
    </main>
  );
}
