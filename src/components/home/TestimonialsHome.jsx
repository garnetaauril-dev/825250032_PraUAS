import Pic from "../Pic.jsx";
import Reveal from "../Reveal.jsx";
import SectionTitle from "../SectionTitle.jsx";
import { testimonialsHome } from "../../data/data.js";

export default function TestimonialsHome() {
  return (
    <section className="testi-home">
      <Pic name="testi-bg" className="testi-bg" />
      <div className="testi-shade light" />
      <div className="container testi-inner">
        <Reveal>
          <SectionTitle script="Testimonials" title="The Best Days Are Spent" light />
        </Reveal>
        <div className="row gy-4">
          {testimonialsHome.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className="col-md-4">
              <div className="testi-item">
                <p>Your appreciation means the world to us, and we're delighted that you enjoyed your charter</p>
                <Pic name={t.img} className="testi-avatar" />
                <h5>{t.name}</h5>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
