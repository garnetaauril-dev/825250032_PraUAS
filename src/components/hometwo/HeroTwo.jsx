import { useEffect, useState } from "react";
import Pic from "../Pic.jsx";
import { heroTwoSlides } from "../../data/data.js";

// Hero Home Two: judul besar kiri-bawah, tombol Discover More + tombol play berputus-putus
export default function HeroTwo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroTwoSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((index - 1 + heroTwoSlides.length) % heroTwoSlides.length);
  const next = () => setIndex((index + 1) % heroTwoSlides.length);

  return (
    <section className="hero hero-two">
      {heroTwoSlides.map((s, i) => (
        <div key={s.img} className={`hero-slide ${i === index ? "active" : ""}`}>
          <Pic name={s.img} className="hero-bg" />
          <div className="hero-overlay soft" />
          <div className="container hero-two-content">
            <h1>{s.title}</h1>
            <p>
              Yachting is one of life's greatest pleasures! We help create unforgettable yacht charters from start to
              finish.
            </p>
            <div className="hero-two-actions">
              <a href="#" className="btn-ghost" onClick={(e) => e.preventDefault()}>
                Discover More
              </a>
              <button className="dash-play" aria-label="Play video">
                <i className="fa-solid fa-play" />
              </button>
            </div>
          </div>
        </div>
      ))}
      <button className="arrow arrow-left glass" onClick={prev} aria-label="Sebelumnya">
        <i className="fa-solid fa-angle-left" />
      </button>
      <button className="arrow arrow-right glass" onClick={next} aria-label="Berikutnya">
        <i className="fa-solid fa-angle-right" />
      </button>
    </section>
  );
}
