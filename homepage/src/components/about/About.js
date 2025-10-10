import "./AboutStyle.css";
import { aboutDec } from "./../../data";
const About = () => {
  return (
    <section className="section-container about-section">
      <div className="about-container">
        <div className="about-group about-me">
          <h1 className="title about-title">about</h1>
          <p className="about-info">{aboutDec[0].aboutMe}</p>
        </div>
        <hr />
        <div className="about-group about-skills">
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
        </div>
        <hr />
        <div className="about-group about-projects">
          <h3>프로젝트 경험</h3>
          <ul>
            {aboutDec[2].projects.map((project) => {
              return (
                <li key={project.id}>
                  <p>{project.title}</p>
                  <p className="about-desc">{project.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
        <div className="about-group about-learning">
          <h3>성장과 경험</h3>
          <p className="about-info">{aboutDec[3].learning}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
