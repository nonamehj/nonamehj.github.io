import React from "react";
import "./ProjectOverviewStyle.css";
const ProjectOverview = ({
  img,
  title,
  setIsTechOpen,
  isTechOpen,
  projectLinks,
}) => {
  return (
    <article className="project-article project-overview-article">
      <div className="project-overview">
        <div
          className="project-img-center"
          onClick={() => setIsTechOpen(!isTechOpen)}
        >
          <img src={img} alt={title} className="project-image" />
        </div>
        <h2 className="overview-title">{title}</h2>
        <button
          className="skill-btn"
          onClick={() => setIsTechOpen(!isTechOpen)}
        >
          <p>프로젝트 개요</p>
        </button>
        <div className="project-detail-links">
          <a
            href={projectLinks.result}
            target="_blank"
            rel="noopener noreferrer"
            className="project-left"
          >
            프로젝트
          </a>
          <a
            href={projectLinks.source}
            target="_blank"
            rel="noopener noreferrer"
            className="project-right"
          >
            깃허브
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectOverview;
