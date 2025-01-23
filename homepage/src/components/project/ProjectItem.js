import "./ProjectItemStyle.css";
// import { Link } from "react-router-dom";
const ProjectItem = ({ img, title, setIsOpen, isOpen, projectLinks }) => {
  return (
    <div className="project-info">
      <div className="project-img-center" onClick={() => setIsOpen(!isOpen)}>
        <img src={img} alt={title} className="project-img" />
      </div>
      <h2>{title}</h2>
      <button className="skill-btn" onClick={() => setIsOpen(!isOpen)}>
        <p>프로젝트 개요</p>
      </button>
      <div className="project-details">
        <a
          href={`${projectLinks.result}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn proj-left"
        >
          view
        </a>
        {/* <Link to="/" className="btn proj-right"> */}
        <a
          href={`${projectLinks.source}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn proj-right"
        >
          source
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
