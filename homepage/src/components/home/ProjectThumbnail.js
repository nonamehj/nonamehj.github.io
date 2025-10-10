import "./ProjectThumbnailStyle.css";
import { useState } from "react";
import { thumbnailData } from "../../data";
const ProjectThumbnail = ({ handleClick, activeId }) => {
  const [thumbImages] = useState(thumbnailData);

  return (
    <section className="thumbnail-section portfolio-thumbnail-section">
      <div className="thumbnail-container portfolio-thumbnail-container">
        {thumbImages.map((thumb) => {
          return (
            <article
              key={thumb.id}
              className="thumbnail-article portfolio-thumbnail-article"
            >
              <div className="thumbnail-image-wrapper portfolio-thumbnail-image-wrapper">
                <img
                  src={thumb.image}
                  alt={thumb.title}
                  className="thumbnail-image portfolio-thumbnail-image"
                />
              </div>

              <button
                onClick={() => handleClick(thumb.id)}
                className="thumbnail-btn portfolio-thumbnail-btn"
              >
                <span>{activeId === thumb.id ? "닫기" : "열림"}</span>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectThumbnail;
