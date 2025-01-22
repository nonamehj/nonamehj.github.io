import "./ProjectPageStyle.css";
import Projects from "./Projects";
import { data } from "../../data";
const ProjectPage = () => {
  return (
    <section className="section project-section">
      <div className="project-container">
        <h1>projects</h1>
        <div className="project-center">
          {data.map((project) => {
            return <Projects key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
