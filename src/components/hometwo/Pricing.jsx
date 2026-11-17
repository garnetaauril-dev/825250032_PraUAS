import Reveal from "../Reveal.jsx";
import SectionTitle from "../SectionTitle.jsx";
import { plans, planFeatures } from "../../data/data.js";

export default function Pricing() {
  return (
    <section className="section bg-grey">
      <div className="container">
        <Reveal>
          <SectionTitle script="Pricing Plan" title="Choose Your Pricing Plan" />
        </Reveal>
        <div className="row gy-4 align-items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} className="col-lg-4 col-md-6">
              <div className={`plan ${p.dark ? "dark" : ""}`}>
                <h4>{p.name}</h4>
                <div className="plan-price">
                  <span className="dollar">$</span>
                  <span className="amount">{p.price}</span>
                  <small> / Week</small>
                </div>
                <ul>
                  {planFeatures.map((f, idx) => (
                    <li key={f} className={p.off.includes(idx) ? "off" : ""}>
                      <i className="fa-solid fa-arrow-right" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={p.dark ? "btn-blue block" : "btn-outline-blue block"} onClick={(e) => e.preventDefault()}>
                  Choose Plan
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
