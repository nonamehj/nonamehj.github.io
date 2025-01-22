import React from "react";
import "./DescriptionsStyle.css";
import { useState, useEffect } from "react";
import { desc } from "../../data";
const Descriptions = () => {
  const [descriptions] = useState(desc);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeOut = setInterval(() => {
      setValue((prev) => (prev + 1) % descriptions.length);
    }, 2000);
    return () => clearInterval(timeOut);
  }, [descriptions.length]);
  return (
    <div className="description">
      {descriptions.map((description, index) => {
        const title = Object.keys(description);
        const desc = Object.values(description)[0];
        let position = "nextSlide";
        if (index === value) {
          position = "activeSlide";
        }
        if (index === value - 1) {
          position = "prevSlide";
        }
        return (
          <p key={title} className={`${position} desc`}>
            {desc}
          </p>
        );
      })}
    </div>
  );
};

export default Descriptions;
