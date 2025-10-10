import React, { useState } from "react";
import "./ProjectItemStyle.css";
import ProjectOverview from "./ProjectOverview";
import SkillDetail from "./SkillDetail";
const ProjectItem = ({
  title,
  img,
  skill,
  overview,
  features,
  description,
  skillDec,
  projectLinks,
}) => {
  const [isTechOpen, setIsTechOpen] = useState(false);
  return (
    <>
      {!isTechOpen ? (
        <ProjectOverview
          img={img}
          title={title}
          setIsTechOpen={setIsTechOpen}
          isTechOpen={isTechOpen}
          projectLinks={projectLinks}
        />
      ) : (
        <SkillDetail
          isTechOpen={isTechOpen}
          setIsTechOpen={setIsTechOpen}
          skill={skill}
          overview={overview}
          features={features}
          description={description}
          skillDec={skillDec}
        />
      )}
    </>
  );
};

export default ProjectItem;
