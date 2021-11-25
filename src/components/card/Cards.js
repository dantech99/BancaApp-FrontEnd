import React from "react";
import Card from "./Card";

import image1 from "../../assets/undraw_map_re_60yf.svg";
import image2 from "../../assets/undraw_credit_card_re_blml.svg";
import image3 from "../../assets/undraw_progressive_app_m-9-ms.svg";

const cards = [
  {
    id: 1,
    title: "Lineas de atención",
    image: image1,
  },
  {
    id: 2,
    title: "Tarjeta de Credito",
    image: image2,
  },
  {
    id: 3,
    title: "Canales Alternos",
    image: image3,
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 p-4">
      <div className="row">
        {cards.map(({ title, image, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
