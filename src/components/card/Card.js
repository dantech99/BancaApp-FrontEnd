import React from "react";
// import PropTypes from "prop-types";

import "./card.css";

function Card({ imageSource, title }) {
  return (
    <div className="card text-center bg-ligth animate__animated animate__fadeInUp p-4">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{title}</h4>
      </div>
    </div>
  );
}

export default Card;
