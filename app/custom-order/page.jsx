"use client";

import { useSearchParams } from "next/navigation";

export default function CustomOrderPage() {
  const searchParams = useSearchParams();
  const requestedItem = searchParams.get("item") || "";

  return (
    <main className="shell">
      <section className="custom-order-page">
        <div className="section-heading">
          <p className="eyebrow">Custom Order Request</p>

          <h1>
            Have an idea? Send the rough version.
            The polished version starts here.
          </h1>

          <p>
            Tell us what you have in mind. Whether it's a completely custom
            design, something you've seen on the site, or just a rough sketch,
            we'll work with you to bring it to life.
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
            value="New Rich Craft Designs Custom Order Request"
          />

          <div className="form-grid">
            <label>
              Name
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label>
            Requested Item / Inspiration Piece
            <input
              type="text"
              name="requested_item"
              defaultValue={requestedItem}
              placeholder="Example: Millennium Falcon Clock"
            />
          </label>

          <label>
            Phone Number (optional)
            <input
              type="tel"
              name="phone"
              placeholder="(555) 555-5555"
            />
          </label>

          <label>
            Dimensions / Size (optional)
            <input
              type="text"
              name="dimensions"
              placeholder='Example: 24" x 18"'
            />
          </label>

          <label>
            Budget Range (optional)
            <select name="budget">
              <option value="">Select a budget range</option>
              <option>$0 - $50</option>
              <option>$50 - $100</option>
              <option>$100 - $250</option>
              <option>$250 - $500</option>
              <option>$500+</option>
            </select>
          </label>

          <label>
            Project Details
            <textarea
              name="message"
              rows="8"
              required
              placeholder="Describe your idea, theme, materials, personalization, colors, or anything else you'd like us to know."
            />
          </label>

          <button className="button primary" type="submit">
            Submit Custom Order Request
          </button>
        </form>
      </section>
    </main>
  );
}
