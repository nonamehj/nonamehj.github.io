import {
  useEffect,
  useState,
  useCallback,
  Suspense,
  useRef,
  useMemo,
} from "react";
import "./PortfolioLayoutStyle.css";
import { galleryData } from "../../data";
import { HeroSection, ProjectGallery, ProjectThumbnail } from "./";
import Loading from "./../loading/Loading";

const PortfolioLayout = () => {
  const [isResize, setIsResize] = useState(window.innerWidth >= 768);
  const [activeId, setActiveId] = useState("");
  const layoutGalleryRef = useRef(null);
  const handleClick = useCallback((id) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);
  const activeItem = useMemo(
    () => galleryData.find((item) => item.id === activeId),
    [activeId]
  );

  useEffect(() => {
    const handleResize = () => {
      setIsResize(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768 && layoutGalleryRef.current) {
      layoutGalleryRef.current.scrollTop = 0;
      layoutGalleryRef.current.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }
  }, [activeId]);

  return (
    <section
      className="section home-section portfolio-section"
      ref={layoutGalleryRef}
    >
      <div className="section-container portfolio-container">
        {isResize ? (
          <div
            className={`pc-layout portfolio-pc-layout ${
              activeId ? "protfolio-gallery-pc-layout" : ""
            }`}
          >
            <div className="pc-thumbnails portfolio-sidebar">
              <ProjectThumbnail handleClick={handleClick} activeId={activeId} />
            </div>
            <div className="pc-content portfolio-main">
              {activeItem ? (
                // <div className="portfolio-gallery-wrapper">
                <Suspense fallback={<Loading />}>
                  <ProjectGallery
                    activeItem={activeItem}
                    setActiveId={setActiveId}
                    className="mobile-gallery-open"
                    activeId={activeId}
                  />
                </Suspense>
              ) : (
                // </div>
                <HeroSection />
              )}
            </div>
          </div>
        ) : (
          <div className="mobile-layout portfolio-mobile-layout">
            <div className="mobile-content portfolio-hero-wrapper">
              <HeroSection className="portfolio-hero" />
            </div>
            <div className="mobile-thumbnails portfolio-thumbanils-wrapper">
              {activeItem ? (
                <Suspense fallback={<Loading />}>
                  <ProjectGallery
                    activeItem={activeItem}
                    setActiveId={setActiveId}
                    className="mobile-gallery-open portfolio-mobile-gallery"
                    activeId={activeId}
                  />
                </Suspense>
              ) : (
                <ProjectThumbnail
                  handleClick={handleClick}
                  activeId={activeId}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioLayout;
