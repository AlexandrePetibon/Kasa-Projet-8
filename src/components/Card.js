import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({cardData}) => {
  const {id, cover, title, location} = cardData;

  return (
    <NavLink to={`./logement/${id}`}>
      <div className="card" style={{backgroundImage: `url(${cover})`}}>
        <h2>{title}</h2>
        <p>{location}</p>
      </div>
    </NavLink>
  );
};

export default Card;







