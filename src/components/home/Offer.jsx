import Pic from "../Pic.jsx";
import Reveal from "../Reveal.jsx";
import SectionTitle from "../SectionTitle.jsx";
import { offers } from "../../data/data.js";

export default function Offer() {
  return (
    <section className="offer">
      <Pic name="offer" className="offer-bg" />
      <div className="offer-shade" />
      <div className="container offer-inner">
        <Reveal>
          <SectionTitle script="Explore" title="What We Offer" light />
        </Reveal>
        <div className="offer-circles">
          {offers.map((o, i) => (
            <Reveal key={o.name} dir="zoom" delay={i * 120}>
              <div className="offer-item">
                <div className="offer-circle">
                  <i className={`fa-solid ${o.icon}`} />
                </div>
                <h5>{o.name}</h5>
              </div>
            </Reveal>
          ))}
        </div>
        <a href="#" className="btn-blue" onClick={(e) => e.preventDefault()}>
          Learn More
        </a>
      </div>
    </section>
  );
}
