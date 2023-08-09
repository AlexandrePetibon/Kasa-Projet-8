import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
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
