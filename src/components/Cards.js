import React from 'react';
import data from "../data/data.json";
import Card from "./Card";

const Cards = () => {
    return (
        <div>
            <div className="cards">
            {data.map((item) => (
              <Card key={item.id} cardData={item} />
            ))}
          </div>
        </div>
    );
};

export default Cards;