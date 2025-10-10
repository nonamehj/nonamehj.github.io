import "./ProjectGalleryStyle.css";
import { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";
const ProjectGallery = ({ activeItem, setActiveId, activeId }) => {
  const { id, images, title } = activeItem;

  const [isActiveBtn, setIsActiveBtn] = useState(true);
  const galleryRef = useRef(null);
  const activeRef = useRef(null);
  const handleToggleBtn = (target) => {
    if (isActiveBtn !== target) setIsActiveBtn(target);
  };

  const handleUpClick = () => {
    galleryRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.scrollTop = 0;
      galleryRef.current.scrollIntoView({ behavior: "auto", block: "start" });
    }
    setIsActiveBtn(true);
  }, []);
  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollTop = 0;
      // activeRef.current.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, [isActiveBtn, activeId]);
  return (
    <section
      className="gallery-section portfolio-gallery-section"
      ref={galleryRef}
    >
      <div className="gallery-container portfolio-gallery-container">
        <div className="gallery-btns-wrapper portfolio-gallery-controls">
          <button
            onClick={() => setActiveId(null)}
            className="mobile-gallery-close-btn portfolio-gallery-close-btn"
          >
            <span>
              <FaArrowLeft className="gallery-close-btn" />
            </span>
          </button>
          <button
            className={`low-btn portfolio-gallery-toggle-low ${
              !isActiveBtn ? "active-btn" : ""
            }`}
            // onClick={() => setIsActiveBtn(false)}
            onClick={() => handleToggleBtn(false)}
          >
            <span>767px 이하</span>
          </button>
          <button
            className={`high-btn portfolio-gallery-toggle-hight ${
              isActiveBtn ? "active-btn" : ""
            }`}
            // onClick={() => setIsActiveBtn(true)}
            onClick={() => handleToggleBtn(true)}
          >
            <span>768px 이상</span>
          </button>
        </div>
        <div
          className="gallery-images portfolio-gallery-images"
          ref={activeRef}
        >
          {isActiveBtn
            ? images["1280"].map((item) => {
                return (
                  <div
                    key={`${title}-${item.feature}`}
                    className="gallery-item portfolio-gallery-item"
                  >
                    <a
                      href={item.photo}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src={item.photo}
                        alt={item.feature}
                        className="gallery-item-image portfolio-gallery-item-image"
                        // onClick={() =>
                        //   window.open(item.photo, "popup", "width:400,height:400")
                        // }
                      />
                    </a>
                  </div>
                );
              })
            : images["767"].map((item) => {
                return (
                  <div
                    key={`${title}-${item.feature}`}
                    className="gallery-item portfolio-gallery-item"
                  >
                    <a
                      href={item.photo}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src={item.photo}
                        alt={item.feature}
                        className="gallery-item-image portfolio-gallery-item-image"
                        // onClick={() =>
                        //   window.open(item.photo, "popup", "width:400,height:400")
                        // }
                      />
                    </a>
                  </div>
                );
              })}
        </div>
        <div className="gallery-btns-wrapper gallery-up-btns">
          <button
            className="up-btn portfolio-gallery-toggle-up"
            onClick={handleUpClick}
          >
            <span>
              <FaArrowUp />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
