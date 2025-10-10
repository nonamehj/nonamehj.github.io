import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../images/hero-section-images/hero-image.webp";
import Descriptions from "./Descriptions";
import "./HeroSectionStyle.css";
const HeroSection = () => {
  return (
    <section className="portfolio-hero-section">
      <div className="content portfolio-hero-container">
        <img
          src={heroImage}
          alt="hero-section-image"
          className="content-image portfolio-hero-image"
        />
        <div className="title-info portfolio-hero-titles">
          <h1 className="title-react portfolio-hero-main-title">
            React Developer <br /> Frontend React Developer
          </h1>
          {/* <h2 className="title-frontend portfolio-hero-sub-title">
            Frontend React Developer
          </h2> */}
        </div>
        <Descriptions className="portfolio-hero-description" />
        <div className="content-links portfolio-hero-links">
          <ul>
            <li>
              <Link
                to="/projects"
                className="btn btn-left portfolio-hero-btn-left"
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="btn btn-right portfolio-hero-btn-right"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
