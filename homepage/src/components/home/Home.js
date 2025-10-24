import "./HomeStyle.css";
import React, { useEffect, useState, useCallback } from "react";
import ProjectThumbnail from "./ProjectThumbnail";
// import Descriptions from "./Descriptions";
// import homeImg from "../../images/home-img.webp";
// import { Link } from "react-router-dom";
import ProjectGallery from "./ProjectGallery";
import { galleryData } from "../../data";
import HeroSection from "./HeroSection";

const Home = () => {
  const [isResize, setIsResize] = useState(window.innerWidth >= 768);
  const [activeId, setActiveId] = useState("");
  // const [test, setTest] = useState(previewData);
  const handleClick = useCallback((id) => {
    // const checkProject = test.filter((item) => item.id === id);
    setActiveId((prev) => (prev === id ? null : id));
    // setProjectData(checkProject);
  }, []);
  // const activeItem = test.find((item) => item.id === activeId);
  const activeItem = galleryData.find((item) => item.id === activeId);

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
      <div
        className={`section-container home-container ${
          activeId && "preview-home-container"
        }`}
      >
        <div className="mobile-content pc-content">
          {isResize ? (
            !activeItem ? (
              <HeroSection />
            ) : (
              <>
                <div className="gallery-open-wrapper">
                  <ProjectGallery
                    className="pc-gallery-open"
                    activeItem={activeItem}
                    setActiveId={setActiveId}
                  />
                </div>
              </>
            )
          ) : (
            <HeroSection />
          )}
        </div>

        <div className="mobile-thumbnails pc-thumbnails">
          {isResize ? (
            <ProjectThumbnail handleClick={handleClick} activeId={activeId} />
          ) : !activeItem ? (
            <ProjectThumbnail handleClick={handleClick} activeId={activeId} />
          ) : (
            <>
              <div className="gallery-open-wrapper">
                <ProjectGallery
                  activeItem={activeItem}
                  setActiveId={setActiveId}
                  className="mobile-gallery-open"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
