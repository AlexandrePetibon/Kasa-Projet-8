import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import data from "../../data/data.json";

const Card = ({ cardData }) => {
  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch("http://localhost:8000/logements");
        const data = await res.json();
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    }
    fetchMovies();
  }, []);

  const { id, cover, title, location } = cardData;

  return (
    <NavLink to={`./logement/${id}`}>
      <div className="card" style={{ backgroundImage: `url(${cover})` }}>
        <h2>{title}</h2>
        <p>{location}</p>
      </div>
    </NavLink>
  );
};

export default Card;