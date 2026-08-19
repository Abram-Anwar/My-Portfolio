import { skillGroup, learningSkills } from "../../data/skills";
import { FaArrowTrendUp } from "react-icons/fa6";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="stack">
      <div className="container">
        {/* Section Header */}
        <div className="skills-header">
          <div className="skills-header-content">
            <span className="skills-label">Capabilities</span>

            <h2 className="skills-title">Frontend Skillset</h2>
          </div>
        </div>

        {/* Skill Cards */}
        <div className="skills-grid">
          {skillGroup.map((group) => (
            <article
              className={`skill-card ${group.className}`}
              key={group.title}
            >
              <div className="skill-icon">
                <group.icon />
              </div>

              <h3 className="skill-card-title">{group.title}</h3>

              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="learning">
          <div className="learning-header">
            <FaArrowTrendUp className="learning-icon" />

            <h3 className="learning-title">
              Actively Expanding Stack & Skillset
            </h3>
          </div>

          <div className="learning-list">
            {learningSkills.map((skill) => (
              <span className="learning-item" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
