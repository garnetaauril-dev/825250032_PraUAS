import Reveal from "../Reveal.jsx";
import SectionTitle from "../SectionTitle.jsx";
import { features } from "../../data/data.js";

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionTitle script="Basic Features" title="Our Way to Success" />
        </Reveal>
        <div className="row gy-4 feature-row">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 120} className="col-lg-4 col-md-6">
              <div className="feature-card">
                <span className="feature-corner" />
                <i className={`fa-solid ${f.icon} feature-icon`} />
                <h4>{f.title}</h4>
                <p className="muted">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
