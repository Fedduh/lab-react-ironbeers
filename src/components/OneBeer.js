import React from "react";

import "./OneBeer.css";

const OneBeer = props => {
  return (
    <div className="beer-details-container">
      <div className="beer-details-img">
        <img src={props.image_url} alt="beer" />
      </div>
      <h3>{props.name}</h3>
      <p>{props.tagline}</p>
      <p>{props.first_brewed}</p>
      <p>{props.attenuation_level}</p>
      <p>{props.description}</p>
      <p>Created by: {props.contributed_by}</p>
    </div>
  );
};

export default OneBeer;
