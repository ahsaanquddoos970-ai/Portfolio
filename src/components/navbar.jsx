import React, { useState, useEffect } from 'react';
import './navbar.css';

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position for glassmorphism and neon border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--top'}`}>
      <nav className="navbar__inner">
        {/* Terminal Style Logo */}
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-slash">~/</span>Ahsaan<span className="navbar__logo-cursor">_</span>
        </a>

        {/* Desktop Menu */}
        <ul className="navbar__menu">
          {navItems.map((item) => {
            const sectionId = item.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <li key={item} className="navbar__item">
                <a
                  href={`#${sectionId}`}
                  className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                >
                  {item}
                </a>
                {/* Active indicator underline */}
                {isActive && <span className="navbar__underline"></span>}
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <div className="navbar__toggle-wrap">
          <button
            onClick={() => setOpen(!open)}
            className="navbar__toggle"
            aria-label="Toggle menu"
          >
            <svg className="navbar__toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="navbar__mobile-menu">
          {navItems.map((item) => {
            const sectionId = item.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <li key={item}>
                <a
                  href={`#${sectionId}`}
                  onClick={() => setOpen(false)}
                  className={`navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
