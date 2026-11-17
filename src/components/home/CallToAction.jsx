import Reveal from "../Reveal.jsx";

export default function CallToAction() {
  return (
    <section className="section cta">
      <div className="container text-center">
        <Reveal>
          <h2>
            Interested in Chartering
            <br />
            Your Yacht?
          </h2>
          <p className="muted">
            If you're already an Oyster yacht owner and considering offering for please, contact making the most of this
            valuable opportunity.
          </p>
          <a href="#" className="btn-outline-blue" onClick={(e) => e.preventDefault()}>
            Contact Manager
          </a>
        </Reveal>
      </div>
    </section>
  );
}
