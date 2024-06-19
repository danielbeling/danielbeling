import React, { useState, useRef } from "react";
import { projects } from "../utils/constants";
import './styles/global.css';
import './styles/projects.css';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const titleRef = useRef(null);

  const handleShowMore = () => {
    if (visibleProjects + 3 <= projects.length) {
      setVisibleProjects(visibleProjects + 3);
    } else {
      setVisibleProjects(projects.length);
    }
  };

  const handleShowLess = () => {
    setVisibleProjects(3);
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="projects" className="skills-container" ref={titleRef}>
      <div className="skills-wrapper">
        <div className="skills-title" style={{ marginTop: '80px' }}>Projetos</div>
        <div className="skills-desc" style={{ marginBottom: "40px" }}>
          Aqui estão alguns dos meus projetos nos quais venho trabalhando nos últimos anos.
        </div>

        <div className="skills-skills-container">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div key={index} className="projects-skill">
              <img src={project.image} className="projects-image" alt={project.title} />
              <div className="projects-details">
                <div className="projects-tags">
                  {project.tags?.map((tag, tagIndex) => (
                    <span key={tagIndex} className="projects-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="projects-title">{project.title}</div>
              <p className="projects-date">{project.date}</p>
              <p className="projects-description">{project.description}</p>
              <div className="projects-buttons">
                <a href={project.github} target='_blank' rel="noreferrer" className="btn-projects">Github</a>
                <a href={project.webapp} target='_blank' rel="noreferrer" className="btn-projects">Preview</a>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <button onClick={handleShowMore} className="btn-load-more">
            Mostrar mais
          </button>
        )}
        {visibleProjects >= projects.length && visibleProjects > 3 && (
          <button onClick={handleShowLess} className="btn-load-more">
            Mostrar menos
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
