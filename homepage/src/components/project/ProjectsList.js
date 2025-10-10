import React from "react";
import "./ProjectsListStyle.css";
import { data } from "../../data";
import ProjectItem from "./ProjectItem";
const ProjectsList = () => {
  return (
    <section className="section projects-section">
      <div className="projects-container section-container">
        <h1 className="title project-title">projects</h1>
        <div className="project-wrapper">
          {data.map((project) => {
            return <ProjectItem key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
