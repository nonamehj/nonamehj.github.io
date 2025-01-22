import { Link } from "react-router-dom";
import "./ProjectItemStyle.css";
const ProjectItem = ({ img, title, setIsOpen, isOpen }) => {
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
        <Link to="/" className="btn proj-left">
          view
        </Link>
        <Link to="/" className="btn proj-right">
          source
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
