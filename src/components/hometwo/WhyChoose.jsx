import Reveal from "../Reveal.jsx";
import SectionTitle from "../SectionTitle.jsx";
import { whyChoose } from "../../data/data.js";

export default function WhyChoose() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionTitle script="What We Do" title="Whay Choose US" />
        </Reveal>
        <div className="row gy-3">
          {whyChoose.map((w, i) => (
            <Reveal key={w.title + i} delay={(i % 3) * 100} className="col-lg-4 col-md-6">
              <div className="why-card">
                <span className="why-icon">
                  <i className={`fa-solid ${w.icon}`} />
                </span>
                <div>
                  <h5>{w.title}</h5>
                  <p>Perfectly simple &amp; easy to in our hour, when our ...</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
