import "./SkillDetailStyle.css";
import { FaTimes } from "react-icons/fa";

const SkillDetail = ({
  setIsOpen,
  isOpen,
  skill,
  overview,
  features,
  description,
  skillDec,
}) => {
  return (
    <div className="skill-detail">
      <div className="skill-container">
        <button className="close-modal" onClick={() => setIsOpen(!isOpen)}>
          <FaTimes />
        </button>
        <h3>프로젝트 개요</h3>
        <p>{overview}</p>
        <h4>기술</h4>
        <p className="skill-p">{skill}</p>
        <ul>
          {skillDec.map((skill) => {
            return (
              <li key={skill.id}>
                {skill.name} - {skill.dec}
              </li>
            );
          })}
        </ul>
        <h4>주요기능</h4>
        <ul>
          {features.map((feature) => {
            return <li key={feature.id}>{feature.dec}</li>;
          })}
        </ul>
        <h4>설명</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SkillDetail;
