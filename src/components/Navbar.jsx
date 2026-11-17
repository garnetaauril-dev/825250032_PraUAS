import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import { menuItems } from "../data/data.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); // navbar jadi sticky + bayangan saat scroll
  const [open, setOpen] = useState(false); // menu mobile (hamburger)
  const [openSub, setOpenSub] = useState(null); // dropdown yang terbuka di mobile
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // tutup menu mobile saat pindah halaman
  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [location.pathname]);

  return (
    <header className={`navbar-wrap ${scrolled ? "sticky" : ""}`}>
      <div className="container nav-inner">
        <Logo />

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>

        <nav className={`menu ${open ? "open" : ""}`}>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={`menu-item ${item.sub ? "has-sub" : ""} ${openSub === item.label ? "sub-open" : ""}`}
              >
                {item.sub ? (
                  <>
                    <a
                      href="#"
                      className="menu-link"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenSub(openSub === item.label ? null : item.label);
                      }}
                    >
                      {item.label} <i className="fa-solid fa-angle-down chev" />
                    </a>
                    <ul className="submenu">
                      {item.sub.map((s) =>
                        s.to.startsWith("/") ? (
                          <li key={s.label}>
                            <NavLink to={s.to} end>
                              {s.label}
                            </NavLink>
                          </li>
                        ) : (
                          <li key={s.label}>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              {s.label}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </>
                ) : (
                  <Link to="#" className="menu-link" onClick={(e) => e.preventDefault()}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
