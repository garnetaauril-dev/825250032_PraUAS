import Pic from "./Pic.jsx";
import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { team } from "../data/data.js";

// Dipakai di Home dan Home Two
export default function Team() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionTitle script="Our Team" title="Meet Our Excellent Guides" />
        </Reveal>
        <div className="row gy-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100} className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-img">
                  <Pic name={m.img} alt={m.name} />
                  <span className="team-tint" />
                  <button className="share-btn" aria-label="Share">
                    <i className="fa-solid fa-share-nodes" />
                  </button>
                </div>
                <div className="team-info">
                  <h5>{m.name}</h5>
                  <small>{m.role}</small>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
