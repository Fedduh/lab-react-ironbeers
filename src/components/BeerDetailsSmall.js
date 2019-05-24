import React from "react";
import { Link } from "react-router-dom";

import "./BeerDetailsSmall.css";

const BeerDetailsSmall = props => {
  return (
    <div className="beer-details-small-container">
      <div className="beer-details-small-img">
        <Link to={`/beers/${props._id}`} >
          <img src={props.image_url} alt="beer" />
        </Link>
      </div>
      <div>
        <h3>{props.name}</h3>
        <p className="beer-tagline">{props.tagline}</p>
        <p>Created by: {props.contributed_by}</p>
      </div>
    </div>
  );
};

export default BeerDetailsSmall;
