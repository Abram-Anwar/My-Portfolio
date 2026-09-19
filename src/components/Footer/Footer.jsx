import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copy">
          © 2026 ABRAM ANWAR <span className="footer-divider">//</span> FRONTEND
          DEVELOPER
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/Abram-Anwar"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>

          <a
            href="https://www.linkedin.com/in/abram-anwar-1159a8313"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
