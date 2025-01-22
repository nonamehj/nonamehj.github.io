import "./HomePageStyle.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectsImg from "./ProjectsImg";
import Descriptions from "./Descriptions";
import homeImg from "../../img/home-img.webp";
const HomePage = () => {
  const [isResize, setIsResize] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsResize(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="section home-section">
      <div className="home-container">
        {isResize && <ProjectsImg />}
        <div className="content">
          <img src={homeImg} alt="home-image" className="content-img" />
          <div className="title-info">
            <h1 className="title-react">React Developer</h1>
            <h1 className="title-frontend">Frontend React Developer</h1>
          </div>

          {isResize && <Descriptions />}
          <ul className="btn-links">
            <li>
              <Link to="/project" className="btn btn-left">
                projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="btn btn-right">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
