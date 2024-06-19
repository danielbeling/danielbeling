import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import './card.css';

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        color: "#fff",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "10px solid  #ccc",
      }}
      date={education.date}
    >
      <div className="top">
        <img src={education.img} className="image" alt={education.school} />
        <div className="body">
          <div className="name">{education.school}</div>
          <div className="degree">{education.degree}</div>
          <div className="date">{education.date}</div>
        </div>
      </div>
      <div className="description">
        <div className="span">{education.desc}</div>
      </div>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
