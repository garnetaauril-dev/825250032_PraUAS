import Pic from "../Pic.jsx";
import Reveal from "../Reveal.jsx";
import SectionTitle from "../SectionTitle.jsx";
import { seasons } from "../../data/data.js";

export default function Seasons() {
  return (
    <section className="section bg-blue-soft">
      <div className="container">
        <Reveal>
          <SectionTitle script="Book Today" title="Yacht & Boats For All Seasons" />
        </Reveal>
        <div className="row gy-3">
          {seasons.map((s, i) => (
            <Reveal key={s.name} delay={(i % 2) * 120} className="col-lg-6">
              <div className="season-card">
                <div className="season-img">
                  <Pic name={s.img} alt={s.name} />
                  <button className="heart" aria-label="Favorit">
                    <i className="fa-regular fa-heart" />
                  </button>
                </div>
                <div className="season-body">
                  <div className="season-top">
                    <small>{s.place}</small>
                    <span>
                      <i className="fa-solid fa-star" /> 4.5/5
                    </span>
                  </div>
                  <h5>{s.name}</h5>
                  <p>12 Guests . 6 Beds . 2 Cabins . 1 Bathroom</p>
                  <div className="season-foot">
                    <strong>${s.price} / week</strong>
                    <a href="#" className="btn-blue small" onClick={(e) => e.preventDefault()}>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
