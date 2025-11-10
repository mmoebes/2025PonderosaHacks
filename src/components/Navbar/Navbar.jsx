import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container container">
        <input type="checkbox" aria-label="Toggle navigation menu" />
        <div className="hamburger-lines" aria-hidden="true">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>

        <ul className="menu-items">
          <li className="borderXwidth">
            <a href="#About">About</a>
          </li>

          {/*
          <li className="borderXwidth">
            <a href="#FAQs">FAQs</a>
          </li>
          <li className="borderXwidth">
            <a href="#Venue">Venue</a>
          </li>
          */}

          <li className="borderXwidth">
            <a href="#Sponsors">Sponsors</a>
          </li>
          <li className="borderXwidth">
            <a href="#Leadership">Leadership</a>
          </li>
          <li className="borderXwidth">
            <a href="mailto:info@ponderosa-hacks.com" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </li>
          <li className="borderXwidth">
            <a
              href="https://2024.ponderosa-hacks.com/"  // <-- replace with your subdomain
              target="_blank"
              rel="noopener noreferrer"
            >
              History
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
