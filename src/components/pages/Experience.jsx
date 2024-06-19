import React from "react";
import { experiences } from "../utils/constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "./cards/ExperienceCard";
import './styles/global.css';

const Experience = () => {
  return (
    <div id="experience" className="experience-container">
      <div className="experience-wrapper">
        <div className="experience-title">Experiência</div>
        <div className="experience-desc" style={{ marginBottom: "40px" }}>
          Minha experiência de trabalho como engenheiro de software e atuação em diversas empresas e projetos.
        </div>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
