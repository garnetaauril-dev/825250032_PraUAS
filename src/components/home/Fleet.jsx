import Pic from "../Pic.jsx";
import Reveal from "../Reveal.jsx";
import SectionTitle from "../SectionTitle.jsx";
import { fleet } from "../../data/data.js";

export default function Fleet() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionTitle script="For Sale & Rent" title="Fleet of Luxury Boats" />
        </Reveal>

        <div className="row gy-4 justify-content-center">
          {fleet.map((boat, i) => (
            <Reveal key={boat.name} delay={i * 120} className="col-lg-4 col-md-6">
              <div className="boat-card">
                <div className="boat-img">
                  <Pic name={boat.img} alt={boat.name} />
                </div>
                <div className="boat-body">
                  <h4>{boat.name}</h4>
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <i key={n} className="fa-solid fa-star" />
                    ))}
                    <span> (5.00 Rating)</span>
                  </div>
                  <div className="boat-foot">
                    <div>
                      <small>From</small>
                      <div className="price">$10 - $300</div>
                    </div>
                    <a href="#" className="btn-book" onClick={(e) => e.preventDefault()}>
                      Book Now <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="#" className="btn-outline-blue" onClick={(e) => e.preventDefault()}>
            View All Yachts
          </a>
        </div>
      </div>
    </section>
  );
}
