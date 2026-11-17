import Pic from "../Pic.jsx";
import Reveal from "../Reveal.jsx";
import { aboutPoints } from "../../data/data.js";

export default function About() {
  return (
    <section className="section about">
      <div className="container">
        <div className="row align-items-center gy-4">
          <Reveal dir="left" className="col-lg-6">
            <div className="about-img">
              {/* kotak biru di pojok kiri atas sudah menjadi bagian dari gambar about.jpg */}
              <Pic name="about" alt="Captain at the helm" />
            </div>
          </Reveal>

          <Reveal dir="right" className="col-lg-6">
            <div className="script-line left">
              <span className="dash" />
              <span className="script">About Us</span>
              <span className="dash" />
            </div>
            <h2 className="about-title">Welcome to Amanus, the best yachting platform</h2>
            <p className="muted">
              Dimply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard
              dummy text ever since thewhen printer took this galleywhen an unknown printer took.
            </p>

            {aboutPoints.map((p) => (
              <div key={p.title} className="about-point">
                <h5>
                  <span className="circle-arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                  {p.title}
                </h5>
                <p className="muted">{p.text}</p>
              </div>
            ))}

            <a href="#" className="btn-blue" onClick={(e) => e.preventDefault()}>
              View More <i className="fa-solid fa-arrow-right" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
