import { FaExternalLinkAlt } from "react-icons/fa";
import { LuCode } from "react-icons/lu";
import { projects } from "../../data/projects";
import { VscFolderOpenedCompact } from "react-icons/vsc";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="work">
      <div className="container">
        {/* Section Header */}
        <div className="projects-header">
          <div className="projects-header-content">
            <span className="label">Portfolio</span>

            <h2 className="projects-title">Featured Projects</h2>
          </div>
        </div>

        {/* Projects */}
        <div className="projects-grid">
          {projects.map((project) => {
            return (
              <div className="project-card" key={project.title}>
                <div className="card-header">
                  {/* Technologies */}
                  <div className="technologies">
                    {project.technologies.map((technology) => {
                      return <span key={technology}>{technology}</span>;
                    })}
                  </div>

                  <div className="icon">
                    <VscFolderOpenedCompact />
                  </div>
                </div>

                {/* Title */}
                <h3>{project.title}</h3>

                {/* Description */}
                <div className="card-content">
                  <div className="project-des">
                    <strong>Problem: </strong>
                    <p>{project.problem}</p>
                  </div>

                  <div className="project-des">
                    <strong>Solution: </strong>
                    <p>{project.solution}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="card-footer">
                  <a href={project.liveDemo} target="_blank" rel="noreferrer">
                    Live Demo <FaExternalLinkAlt />
                  </a>

                  <a href={project.sourceCode} target="_blank" rel="noreferrer">
                    Source Code <LuCode />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
