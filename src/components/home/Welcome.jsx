import Pic from "../Pic.jsx";
import Reveal from "../Reveal.jsx";

// Foto keluarga + kotak biru "Welcome!" (efek parallax lewat background-attachment)
export default function Welcome() {
  return (
    <section className="welcome">
      <Pic name="welcome" className="welcome-bg" />
      <div className="container welcome-inner">
        <div className="row">
          <div className="col-lg-5 offset-lg-6">
            <Reveal dir="zoom">
              <div className="welcome-box">
                <h3>Welcome!</h3>
                <p>
                  We charter professionally crewed, luxury yachts throughout the Caribbean from the British Virgin
                  Islands (BVI) to the Grenadines!
                </p>
                <a href="#" className="btn-blue" onClick={(e) => e.preventDefault()}>
                  View Special Offers
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
