import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ cardData }) => {
  const { id, cover, title, location } = cardData;

  return (
    <NavLink to={`./logement/${id}`} className="card" style={{ backgroundImage: `url(${cover})` }}>
        <h2 className='title-card'>{title}</h2>
        <p className='location-card'>{location}</p>
    </NavLink>
  );
};

export default Card;