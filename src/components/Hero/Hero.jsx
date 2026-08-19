import { TiArrowRight } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const stats = [
    {
      value: "React",
      label: "Component Architecture",
    },
    {
      value: "100%",
      label: "Responsive Layouts",
    },
    {
      value: "Vite",
      label: "Modern Tooling",
    },
  ];

  const codeLines = [
    <>
      <span className="syntax-purple">import</span> {"{ useState }"}{" "}
      <span className="syntax-purple">from</span>{" "}
      <span className="syntax-emerald">'react'</span>;
    </>,

    <></>,

    <>
      <span className="syntax-purple">export const</span>{" "}
      <span className="syntax-blue">DeveloperProfile</span> = () =&gt; {"{"}
    </>,

    <>
      &nbsp;&nbsp;<span className="syntax-purple">const</span> {"[workflow] = "}
      <span className="syntax-blue">useState</span>([
    </>,

    <>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="syntax-emerald">'Reusable Components'</span>,
    </>,

    <>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="syntax-emerald">'Clean State Management'</span>,
    </>,

    <>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="syntax-emerald">'Responsive Design'</span>,
    </>,

    <>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="syntax-emerald">'REST API Integration'</span>
    </>,

    <>&nbsp;&nbsp;]);</>,

    <></>,

    <>
      <span className="syntax-purple">return</span> (
    </>,

    <>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;
      <span className="syntax-brand">Card</span>{" "}
      <span className="syntax-purple-light">name</span>={"{"}
      <span className="syntax-emerald">'Abram Anwar'</span>
      {"}"}&gt;
    </>,

    <>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{workflow."}
      <span className="syntax-blue">map</span>
      {"(item => "}
      &lt;<span className="syntax-brand">Item</span>{" "}
      <span className="syntax-purple-light">key</span>={"{"}
      {"item"}
      {"}"}&gt;
      {"{item}"}
      <br />
      &lt;/<span className="syntax-brand">Item</span>&gt;
      {")}"}
    </>,

    <>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
      <span className="syntax-brand">Card</span>&gt;
    </>,

    <>);</>,

    <>{"};"}</>,
  ];

  return (
    <section className="hero" id="intro">
      <div className="hero-content">
        {/* Left Side */}
        <div className="availability">
          <span className="available-dot"></span>

          <span>Open for Frontend Developer Roles</span>
        </div>

        <div className="hero-heading">
          <h1>Abram Anwar</h1>

          <p className="hero-role">
            Frontend Developer
            <span>//</span>
            React & Modern Web Interfaces
          </p>

          <p className="hero-description">
            Building responsive web applications with React, JavaScript, and
            Tailwind CSS. Focused on component architecture, state management,
            and creating smooth user experiences.
          </p>
        </div>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.value}>
              <div>{stat.value}</div>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <a href="#work">Explore Featured Work</a>

          <a href="#contact">
            Get In Touch
            <span>
              <TiArrowRight />
            </span>
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/Abram-Anwar"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abram-anwar-1159a8313"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-code">
        <div className="code-editor">
          <div className="code-header">
            <div className="window-controls">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>

            <div className="file-name">
              <span>
                <FaReact />
              </span>
              <span>App.jsx</span>
            </div>
          </div>

          <div className="code-body">
            <div className="code-content">
              {codeLines.map((line, index) => (
                <div className="code-line" key={index}>
                  <span className="line-number">{index + 1}</span>

                  <span className="line-code">{line}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="code-status">
            <span>UTF-8 // Vite + React</span>

            <span className="dev-status">
              <span className="status-dot"></span>
              Active Dev Environment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
