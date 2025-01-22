import "./AboutPageStyle.css";
import { aboutDec } from "../../data";

const AboutPage = () => {
  return (
    <section className="section about-section">
      <div className="about-container">
        <h3>about</h3>
        <p className="about-info">{aboutDec[0].aboutMe}</p>
        <h3>기술 </h3>
        <ul>
          {aboutDec[1].skill.map((dec) => {
            const skill = Object.keys(dec);
            const skillDec = Object.values(dec);

            return (
              <li key={skill}>
                <p>
                  {skill} : {skillDec}
                </p>
              </li>
            );
          })}
        </ul>
        <h3>프로젝트 경험</h3>
        <ul>
          {aboutDec[2].projects.map((proj) => {
            return (
              <li key={proj.id}>
                <strong>{proj.title}</strong>
                <p className="aboutDec-p">{proj.description}</p>
              </li>
            );
          })}
        </ul>
        <h3>성장과 경험</h3>
        <p className="about-info">{aboutDec[3].learning}</p>
      </div>
    </section>
  );
};

export default AboutPage;
