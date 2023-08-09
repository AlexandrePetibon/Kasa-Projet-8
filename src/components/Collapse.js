import React, { useState } from "react";
import arrow from "../assets/arrow.png";

const Collapse = ({ title, content }) => {
  const [collapse, setCollapse] = useState(true);
  const [arrowRotation, setArrowRotation] = useState(0);

  const toggleCollapse = () => {
    setCollapse(!collapse);
    setArrowRotation(arrowRotation === 0 ? -180 : 0);
  };

  return (
    <div className="collapse-general">
      <h3 className="about-collapse-title">
        {title}
        <img
          onClick={toggleCollapse}
          className="arrow-collapse"
          src={arrow}
          alt="Arrow"
          style={{ transform: `rotate(${arrowRotation}deg)` }}
        />
      </h3>
      {collapse ? null : <p className="text-collapse-about">{content}</p>}
    </div>
  );
};

export default Collapse;
