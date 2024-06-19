import React from "react";
import { skills } from "../utils/constants";
import './styles/global.css';

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-wrapper">
        <div className="skills-title">Habilidades</div>
        <div className="skills-desc" style={{ marginBottom: "40px" }}>
          Aqui estão algumas das minhas habilidades nas quais venho trabalhando nos últimos 3 anos.
        </div>

        <div className="skills-skills-container">
          {skills.map((skill, index) => (
            <div key={`${index}`}>
              <div className="skills-skill">
                <div className="skills-skill-title">{skill.title}</div>
                <div className="skills-skill-list">
                  {skill.skills.map((item, index_x) => (
                    <div className="skills-skill-item" key={`${index_x}`}>
                      <img src={item.image} alt={item.name} className="skills-skill-image" />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
