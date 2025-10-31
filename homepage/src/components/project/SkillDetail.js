import "./SkillDetailStyle.css";
import { FaTimes, FaArrowLeft } from "react-icons/fa";
const SkillDetail = ({
  isTechOpen,
  setIsTechOpen,
  skill,
  overview,
  features,
  description,
  skillDec,
}) => {
  return (
    <article className="project-article project-skill-article">
      <div className="skill-detail">
        <div className="skill-container">
          <div className="skill-header">
            <button
              className="close-skill"
              onClick={() => setIsTechOpen(!isTechOpen)}
            >
              <FaTimes />
            </button>
            <h3>프로젝트 개요</h3>
          </div>
          <div className="skill-body">
            <p>{overview}</p>
            <hr />
            <h4>기술</h4>
            <p className="skill-text">{skill}</p>
            <ul>
              {skillDec.map((skill) => {
                return (
                  <li key={skill.id}>
                    {skill.name} - {skill.dec}
                  </li>
                );
              })}
            </ul>
            <hr />
            <h4>주요기능</h4>
            <ul>
              {features.map((feature) => {
                return <li key={feature.id}>{feature.dec}</li>;
              })}
            </ul>
            <hr />
            <h4>설명</h4>
            <p>{description}</p>
          </div>
          <div className="skill-footer">
            <button
              className="footer-close-skill"
              onClick={() => setIsTechOpen(!isTechOpen)}
            >
              <FaArrowLeft />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SkillDetail;
