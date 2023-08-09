import React from "react";

const Banner = ({ dimBanner, picture, texte1, texte2 }) => {
  return (
    <div className={`banner ${dimBanner}`}>
      <img className="banner-home" src={picture} alt="" />
      <p className="text-banner-home">{texte1}</p>
    </div>
  );
};

export default Banner;
