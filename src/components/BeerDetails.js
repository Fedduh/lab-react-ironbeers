import React, { Component } from "react";
import Axios from "axios";
import Header from "./Header.js";
import OneBeer from "./OneBeer.js";

class BeerDetails extends Component {
  state = {
    currentBeer: {}
  };

  componentDidMount() {
    Axios.get(
      `https://ih-beer-api.herokuapp.com/beers/${
        this.props.match.params.beerId
      }`
    ).then(beer => {
      this.setState({
        currentBeer: beer.data
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <OneBeer {...this.state.currentBeer} />
      </div>
    );
  }
}

export default BeerDetails;
