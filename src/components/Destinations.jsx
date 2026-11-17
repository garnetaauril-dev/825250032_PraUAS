import Pic from "./Pic.jsx";
import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { destinations } from "../data/data.js";

// Dipakai di Home dan Home Two (grid "Places To Go")
export default function Destinations({ grey = false }) {
  return (
    <section className={`section ${grey ? "bg-grey" : ""}`}>
      <div className="container">
        <Reveal>
          <SectionTitle script="Places To Go" title="The Perfect Destinations" />
        </Reveal>

        <div className="dest-grid">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={i * 80} className={`dest ${d.cls}`}>
              <div className="dest-card">
                <Pic name={d.img} alt={d.name} />
                <h5>{d.name}</h5>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="#" className="btn-outline-blue" onClick={(e) => e.preventDefault()}>
            All Destinations
          </a>
        </div>
      </div>
    </section>
  );
}
