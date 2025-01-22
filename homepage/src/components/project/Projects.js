import "./ProjectsStyle.css";
import { useState } from "react";
import SkillDetail from "./SkillDetail";
import ProjectItem from "./ProjectItem";

const Projects = ({
  title,
  img,
  skill,
  overview,
  features,
  description,
  skillDec,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="project-article">
      <div className="project">
        {!isOpen ? (
          <ProjectItem
            img={img}
            title={title}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        ) : (
          <SkillDetail
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            skill={skill}
            overview={overview}
            features={features}
            description={description}
            skillDec={skillDec}
          />
        )}
      </div>
    </article>
  );
};

export default Projects;
