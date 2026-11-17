import Logo from "./Logo.jsx";
import Pic from "./Pic.jsx";
import Reveal from "./Reveal.jsx";
import { footerLinks, gallery } from "../data/data.js";

const socials = ["fa-facebook-f", "fa-pinterest-p", "fa-instagram", "fa-linkedin-in"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4 footer-top">
          <Reveal className="col-lg-3 col-md-6">
            <Logo light />
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consec tetur elit eiusmod tempor incididunt labore dolore magna aliqua consec
              tetur adipis cing elite
            </p>
            <div className="socials">
              {socials.map((s) => (
                <a key={s} href="#" onClick={(e) => e.preventDefault()}>
                  <i className={`fa-brands ${s}`} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="col-lg-3 col-md-6" delay={100}>
            <h4>Quicklinks</h4>
            <ul className="footer-links">
              {footerLinks.map((l) => (
                <li key={l}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="col-lg-3 col-md-6" delay={200}>
            <h4>Get In Touch</h4>
            <ul className="contact-list">
              <li>
                <i className="fa-solid fa-location-dot" />
                <div>
                  <strong>Location:</strong>
                  <span>2976 Sunrise Avenue, Las Vegas</span>
                </div>
              </li>
              <li>
                <i className="fa-regular fa-envelope" />
                <div>
                  <strong>Email:</strong>
                  <span>example@mail.com</span>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-phone" />
                <div>
                  <strong>Phone:</strong>
                  <span>+8 91230 456 789</span>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal className="col-lg-3 col-md-6" delay={300}>
            <h4>Gallery</h4>
            <div className="footer-gallery">
              {gallery.map((g) => (
                <Pic key={g} name={g} />
              ))}
            </div>
          </Reveal>
        </div>

        <div className="footer-bottom">
          Boat Trip @2025. Boat All Rights Reserved By <a href="#" onClick={(e) => e.preventDefault()}>Dream IT</a>
        </div>
      </div>
    </footer>
  );
}
