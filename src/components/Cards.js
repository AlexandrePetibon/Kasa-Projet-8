import React from 'react';
import Card from "./Card";
import data from "../data/data.json";

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