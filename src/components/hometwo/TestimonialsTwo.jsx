import { useState } from "react";
import Pic from "../Pic.jsx";
import Reveal from "../Reveal.jsx";
import SectionTitle from "../SectionTitle.jsx";
import { testimonialsTwo, testimonialText } from "../../data/data.js";

// Slider testimoni: 2 kartu per slide, titik navigasi di bawah
export default function TestimonialsTwo() {
  const pages = [testimonialsTwo.slice(0, 2), testimonialsTwo.slice(2, 4)];
  const [page, setPage] = useState(0);

  return (
    <section className="testi-two">
      <Pic name="testi-two-bg" className="testi-bg" />
      <div className="testi-shade navy" />
      <div className="container testi-inner">
        <Reveal>
          <SectionTitle script="Testimonial" title="What Are Customer Says?" light />
        </Reveal>

        <div className="testi-slider">
          {pages.map((group, p) => (
            <div key={p} className={`testi-page ${p === page ? "active" : ""}`}>
              {group.map((t) => (
                <div key={t.name} className="testi-card">
                  <div className="testi-left">
                    <Pic name={t.img} className="testi-photo" />
                    <div className="stars big">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <i key={n} className="fa-solid fa-star" />
                      ))}
                    </div>
                  </div>
                  <div className="testi-right">
                    <p>{testimonialText}</p>
                    <h5>{t.name}</h5>
                    <small>{t.date}</small>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="dots">
          {pages.map((_, i) => (
            <button key={i} className={i === page ? "on" : ""} onClick={() => setPage(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
