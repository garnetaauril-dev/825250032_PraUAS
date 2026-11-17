import { useEffect, useState } from "react";
import Pic from "../Pic.jsx";
import { heroSlides } from "../../data/data.js";

// Slider hero Home: auto-play 6 detik + panah kiri/kanan
export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((index - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setIndex((index + 1) % heroSlides.length);

  return (
    <section className="hero">
      {heroSlides.map((s, i) => (
        <div key={s.title} className={`hero-slide ${i === index ? "active" : ""}`}>
          <Pic name={s.img} className="hero-bg" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>{s.title}</h1>
            <p>{s.text}</p>
            <a href="#" className="btn-outline-light-x" onClick={(e) => e.preventDefault()}>
              Discover More
            </a>
          </div>
        </div>
      ))}
      <button className="arrow arrow-left" onClick={prev} aria-label="Sebelumnya">
        <i className="fa-solid fa-angle-left" />
      </button>
      <button className="arrow arrow-right solid" onClick={next} aria-label="Berikutnya">
        <i className="fa-solid fa-angle-right" />
      </button>
    </section>
  );
}
