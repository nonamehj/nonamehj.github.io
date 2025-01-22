import React from "react";
import "./ProjectsImgStyle.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { todolistImg, formImg, moviesImg, cafeImg } from "../../img2";
const ProjectsImg = () => {
  const [projValue, setProjValue] = useState(0);
  const [projectsImg] = useState([
    {
      todolist: todolistImg,
    },
    { form: formImg },
    {
      movies: moviesImg,
    },
    {
      cafe: cafeImg,
    },
  ]);
  useEffect(() => {
    const timeOut = setInterval(() => {
      setProjValue((prev) => (prev + 1) % projectsImg.length);
    }, 2000);
    return () => clearInterval(timeOut);
  }, [projectsImg.length]);

  return (
    <div className="proj-imgs">
      {projectsImg.map((item, index) => {
        const title = Object.keys(item);
        const tempImg = Object.values(item)[0];
        let position = "nextImg";
        if (index === projValue) {
          position = "activeImg";
        }
        if (index === projValue - 1) {
          position = "prevImg";
        }

        return (
          <div className="projectImg-center" key={title}>
            <Link>
              <img
                src={tempImg}
                className={`${position} projImg`}
                alt={title}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsImg;
