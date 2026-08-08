import { MdOutlineFileDownload } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    SetIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    SetIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand */}
        <a href="/" className="brand-logo">
          <span className="brand-icon">&lt;/&gt;</span>
          <span className="brand-name">ABRAM_ANWAR</span>
        </a>

        {/* Navigation */}
        <nav className="navigation" id="navigation">
          <a href="#intro" className="nav-link active">
            <span className="nav-number">01.</span>
            <span className="nav-label">Intro</span>
          </a>

          <a href="#stack" className="nav-link">
            <span className="nav-number">02.</span>
            <span className="nav-label">Stack</span>
          </a>

          <a href="#work" className="nav-link ">
            <span className="nav-number">03.</span>
            <span className="nav-label">Work</span>
          </a>

          <a href="#contact" className="nav-link ">
            <span className="nav-number">04.</span>
            <span className="nav-label">Contact</span>
          </a>
        </nav>

        {/* Header Avtion */}
        <div class="header-actions">
          <a class="resume-link" href="">
            <span class="resume-label">RESUME.PDF</span>
            <span class="resume-icon">
              <MdOutlineFileDownload />
            </span>
          </a>

          {/* Mobile Menu Toggle*/}
          <button
            className="mobile-menu-button"
            onClick={toggleMenu}
            id="mobile-menu-btn"
            aria-label="Toggle-Navigation"
            aria-expanded={isMenuOpen}
          >
            <span className="menu-icon" id="menu-icon">
              {isMenuOpen ? <IoClose /> : <CiMenuFries />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile-Navigation */}
      <div className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
        <nav className="mobile-nav">
          <a href="#intro" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-number">01.</span>
            <span className="mobile-nav-label">Intro</span>
          </a>

          <a href="#stack" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-number">02.</span>
            <span className="mobile-nav-label">Stack</span>
          </a>

          <a href="#work" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-number">03.</span>
            <span className="mobile-nav-label">Work</span>
          </a>

          <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-number">04.</span>
            <span className="mobile-nav-label">Contact</span>
          </a>

          <a href="" className="mobile-resume-link">
            RESUME.PDF
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
