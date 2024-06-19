import React from "react";
import styled from "styled-components";
import { education } from "../utils/constants";
import EducationCard from "./cards/EducationCard.jsx";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Education.css';

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content-center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Education = () => {
  return (
    <Container id="education">
      <div className="education-wrapper">
        <div className="education-title">Formação Acadêmica</div>
        <div className="education-desc" style={{ marginBottom: "40px" }}>
          Minha formação acadêmica tem sido uma jornada de autodescoberta e crescimento. Os detalhes da minha formação educacional são os seguintes.
        </div>

        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </Container>
  );
};

export default Education;
