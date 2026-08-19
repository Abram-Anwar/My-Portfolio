import { MdOutlineFileDownload } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  // Stores the ID of the section that is currently active
  const [activeSection, setActiveSection] = useState("intro");

  // Toggle the mobile menu open/close state
  const toggleMenu = () => {
    SetIsMenuOpen((prev) => !prev);
  };

  // Close the mobile menu
  const closeMenu = () => {
    SetIsMenuOpen(false);
  };

  // Detect which section is currently visible
  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        // Loop through all observed sections
        entries.forEach((entry) => {
          // Check if the section is currently visible in the viewport
          if (entry.isIntersecting) {
            // Get the section ID and set it as the active section
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    // Get all <section> elements from the page
    const sections = document.querySelectorAll("section");

    // Start observing every section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function
    // Stops the observer when the component is unmounted
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand */}
        <a href="/" className="brand-logo">
          <span className="brand-icon">&lt;/&gt;</span>
          <span className="brand-name">ABRAM_ANWAR</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navigation" id="navigation">
          {/* Intro Navigation Link */}
          <a
            href="#intro"
            className={`nav-link ${activeSection === "intro" ? "active" : ""}`}
          >
            <span className="nav-number">01.</span>
            <span className="nav-label">Intro</span>
          </a>

          {/* Stack Navigation Link */}
          <a
            href="#stack"
            className={`nav-link ${activeSection === "stack" ? "active" : ""}`}
          >
            <span className="nav-number">02.</span>
            <span className="nav-label">Stack</span>
          </a>

          {/* Work Navigation Link */}
          <a
            href="#work"
            className={`nav-link ${activeSection === "work" ? "active" : ""}`}
          >
            <span className="nav-number">03.</span>
            <span className="nav-label">Work</span>
          </a>

          {/* Contact Navigation Link */}
          <a
            href="#contact"
            className={`nav-link ${
              activeSection === "contact" ? "active" : ""
            }`}
          >
            <span className="nav-number">04.</span>
            <span className="nav-label">Contact</span>
          </a>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Resume Download Link */}
          <a className="resume-link" href="">
            <span className="resume-label">RESUME.PDF</span>

            <span className="resume-icon">
              <MdOutlineFileDownload />
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-button"
            onClick={toggleMenu}
            id="mobile-menu-btn"
            aria-label="Toggle-Navigation"
            aria-expanded={isMenuOpen}
          >
            <span className="menu-icon" id="menu-icon">
              {/* Show close icon when menu is open,
                otherwise show menu icon */}
              {isMenuOpen ? <IoClose /> : <CiMenuFries />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
        <nav className="mobile-nav">
          {/* Mobile Intro Link */}
          <a href="#intro" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-number">01.</span>
            <span className="mobile-nav-label">Intro</span>
          </a>

          {/* Mobile Stack Link */}
          <a href="#stack" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-number">02.</span>
            <span className="mobile-nav-label">Stack</span>
          </a>

          {/* Mobile Work Link */}
          <a href="#work" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-number">03.</span>
            <span className="mobile-nav-label">Work</span>
          </a>

          {/* Mobile Contact Link */}
          <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-number">04.</span>
            <span className="mobile-nav-label">Contact</span>
          </a>

          {/* Mobile Resume Link */}
          <a href="" className="mobile-resume-link">
            RESUME.PDF
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
