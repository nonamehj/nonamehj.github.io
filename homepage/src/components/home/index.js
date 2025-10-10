import React from "react";
import ProjectThumbnail from "./ProjectThumbnail";
// import ProjectGallery from "./ProjectGallery";
import HeroSection from "./HeroSection";
import Descriptions from "./Descriptions";
const ProjectGallery = React.lazy(() => import("./ProjectGallery"));
// const ProjectGallery = React.lazy(
//   () =>
//     new Promise((res) =>
//       setTimeout(() => {
//         res(import("./ProjectGallery"));
//       }, 200000)
//     )
// );

export { ProjectThumbnail, ProjectGallery, HeroSection, Descriptions };
