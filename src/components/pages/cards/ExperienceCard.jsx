import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import './card.css';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement className="verticalTimeline"
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "10px solid  #ccc",
      }}
      date={experience.date}
    >
      <div className="experience-card-top">
        <img src={experience.img} alt={experience.company} className="experience-card-image" />
        <div className="experience-card-body">
          <div className="experience-card-role">{experience.role}</div>
          <div className="experience-card-company">{experience.company}</div>
          <div className="experience-card-date">{experience.date}</div>
        </div>
      </div>
      <div className="experience-card-description">
        {experience.desc && <div className="experience-card-span">{experience.desc}</div>}
        {experience.skills && (
          <>
            <br />
            <div className="experience-card-skills">
              <b>Skills:</b>
              <div className="experience-card-item-wrapper">
                {experience.skills.map((skill, index) => (
                  <div className="experience-card-skill" key={index}>• {skill}</div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </VerticalTimelineElement >
  );
};

export default ExperienceCard;
