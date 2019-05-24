import React from 'react';
import {Link} from 'react-router-dom';

import './HomeItem.css';

const HomeItem = (props) => {
  return (
    <div className="home-item-container">
      <Link to={props.link}>
        <img src={props.img} alt="beer" />
      </Link>
      <div className="home-item-body">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
    </div>
  )
}

export default HomeItem;