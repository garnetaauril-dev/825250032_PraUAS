import { useState } from "react";
import Pic from "../Pic.jsx";
import Reveal from "../Reveal.jsx";
import BookingCard from "./BookingCard.jsx";
import { bookingCards } from "../../data/data.js";

export default function WelcomeBooking() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="section welcome-two">
      <div className="container">
        <div className="row gy-4">
          <Reveal dir="left" className="col-lg-7">
            <div className="row gx-3 align-items-start">
              <div className="col-md-5">
                <div className="wt-img">
                  <Pic name="welcome-two" />
                </div>
                <button className="play-small" onClick={() => setPlaying(!playing)} aria-label="Play">
                  <span className="ring" />
                  <span className="play-inner">{playing ? "Stop" : "Play"}</span>
                </button>
              </div>
              <div className="col-md-7">
                <div className="who-line">
                  Who We Are <span />
                </div>
                <h2 className="wt-title">Welcome to Sailing! Best Water Sports Agency in Thailand.</h2>
              </div>
            </div>
            <p className="dropcap muted">
              <span>E</span>Yachts are places of entertainment, discovery and relaxation. Yacht rentals here adventure
              of a lifetime awaits you on control tomorrow with Floaty stabilished in 1999 power choiceand when nothing
              prevents being able nkinG.
            </p>
            <a href="#" className="more-link" onClick={(e) => e.preventDefault()}>
              More About Us <i className="fa-solid fa-arrow-right" />
            </a>
          </Reveal>

          <Reveal dir="right" className="col-lg-5">
            <BookingCard />
          </Reveal>
        </div>

        <div className="row gy-4 mt-3">
          {bookingCards.map((n, i) => (
            <Reveal key={n} delay={i * 120} className="col-md-4">
              <BookingCard />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
