import { useState } from "react";
import Pic from "../Pic.jsx";
import Reveal from "../Reveal.jsx";
import { blogsTwo } from "../../data/data.js";

// Carousel blog: tampil 3 kartu, geser 1 kartu setiap klik titik / otomatis
export default function BlogTwo() {
  const [start, setStart] = useState(0);
  const maxStart = blogsTwo.length - 3;
  const visible = blogsTwo.slice(start, start + 3);

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="who-line">
            Latest Blog <span />
          </div>
          <h2 className="blog-two-title">Recent blog &amp; articles</h2>
        </Reveal>

        <div className="row gy-4">
          {visible.map((b) => (
            <div key={b.title} className="col-lg-4 col-md-6 blog-fade">
              <div className="blog-card">
                <div className="blog-img">
                  <Pic name={b.img} alt={b.title} />
                </div>
                <div className="blog-body">
                  <span className="blog-tag">tripzap</span>
                  <h5>{b.title}</h5>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Read More <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dots dark">
          {Array.from({ length: maxStart + 1 }).map((_, i) => (
            <button key={i} className={i === start ? "on" : ""} onClick={() => setStart(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
