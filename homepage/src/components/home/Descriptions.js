import { useEffect, useState } from "react";
import "./DescriptionsStyle.css";
import { desc } from "../../data";
const Descriptions = () => {
  const [descriptions] = useState(desc);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prev) => (prev + 1) % descriptions.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [descriptions.length]);
  return (
    <div className="description-container hero-description-container">
      {descriptions.map((description, index) => {
        const title = Object.keys(description);
        const desc = Object.values(description)[0];
        let slidePosition = "next-slide desc-next";
        if (index === value) slidePosition = "active-slide desc-active";

        if (index === value - 1) slidePosition = "prev-slide desc-prev";

        return (
          <p key={title} className={`desc hero-desc ${slidePosition}`}>
            {desc}
          </p>
        );
      })}
    </div>
  );
};

export default Descriptions;
