import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../data/data.json";
import Collapse from "components/Collapse";
import starActive from "../assets/starActive.png";
import starInactive from "../assets/starInactive.png";
import Slide from "components/Slide";

const Housing = () => {
  const { id } = useParams();
  const selectedHousing = data.find((item) => item.id === id);

  const ratingStars = [];
  for (let i = 1; i <= 5; i++) {
    ratingStars.push(
      <img
        key={i}
        src={i <= selectedHousing?.rating ? starActive : starInactive}
        alt={`Star ${i}`}
        className="stars"
      />
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedHousing) {
      setShouldRedirect(true);
    }
  }, [selectedHousing]);

  useEffect(() => {
    if (shouldRedirect) {
      navigate("/error");
    }
  }, [shouldRedirect, navigate]);

  if (!selectedHousing) {
    return null;
  }

  return (
    <div>
      <Header />
      <div className="body-housing">
        <Slide pictures={selectedHousing.pictures} />
        <div className="general-housing">
          <div className="description-general">
            <h1 className="title-housing">{selectedHousing.title}</h1>
            <p className="second-title-housing">{selectedHousing.location}</p>
            <div className="tag-box">
              {selectedHousing.tags.map((tag, index) => (
                <div key={index} className="tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="identification-host">
            <div className="rating-stars">{ratingStars}</div>
            <div className="host-name-picture">
              <p className="name-host">{selectedHousing.host.name}</p>
              <img
                className="picture-host"
                src={selectedHousing.host.picture}
                alt={selectedHousing.host.name}
              />
            </div>
          </div>
        </div>
        <div className="collapse-housing">
          <Collapse
            className="test"
            title="Description"
            content={selectedHousing.description}
          />
          <Collapse
            className="test"
            title="Equipements"
            content={selectedHousing.equipments.join(", ")}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Housing;
