import { useState } from "react";
import Pic from "../Pic.jsx";

// Banner besar dengan tombol "Play" berdenyut + parallax ringan
export default function VideoBanner() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="video-banner">
      <Pic name="video" className="video-bg" />
      <button className="play-btn" onClick={() => setPlaying(true)} aria-label="Play video">
        <span className="ring" />
        <span className="play-inner">Play</span>
      </button>

      {playing && (
        <div className="video-modal" onClick={() => setPlaying(false)}>
          <div className="video-box" onClick={(e) => e.stopPropagation()}>
            <button className="video-close" onClick={() => setPlaying(false)}>
              <i className="fa-solid fa-xmark" />
            </button>
            <iframe
              title="TripZap video"
              src="https://youtu.be/cm40e1ChozE?si=Kks__RcXy6fP-CLc"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
