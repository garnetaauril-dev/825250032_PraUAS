import Pic from "../Pic.jsx";
import Reveal from "../Reveal.jsx";
import { exhibition } from "../../data/data.js";

export default function Exhibition() {
  return (
    <section className="exhibition">
      <div className="container">
        <Reveal>
          <div className="who-line light">
            Latest Model <span />
          </div>
          <h2 className="ex-title">Explore the beauty of our exhibition.</h2>
        </Reveal>
        <div className="ex-grid">
          {exhibition.map((img, i) => (
            <Reveal key={img} dir="zoom" delay={i * 100} className={`ex-item ex-${i + 1}`}>
              <Pic name={img} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
