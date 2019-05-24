import React, { Component } from "react";
import axios from "axios";

import Header from "./Header.js";
import BeerDetailsSmall from "./BeerDetailsSmall.js";

class BeerOverview extends Component {
  state = {
    beerList: [],
    query: ""
  };

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(beers => {
      // top 20 for performance
      let beerArray = beers.data.slice(0, 20);
      console.log(beerArray);
      this.setState({ beerList: beerArray });
    });
  }

  loadQuery = e => {
    this.setState({
      query: e.target.value
    });
    axios
      .get(
        `https://ih-beer-api.herokuapp.com/beers/search?q=${e.target.value}`
        // When putting ${this.state.query} instead of ${e.target.value}
        // it works when adding letters. But when going from "fr" to "f"
        // will do an API request with the old value "fr"
        // ${e.target.value} does not have this issue
      )
      .then(beers => {
        // top 10 for performance
        let beerArray = beers.data.slice(0, 10);
        this.setState({ beerList: beerArray });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <form>
          <label>Filter (top 10 results)</label>
          <input
            type="text"
            name="query"
            value={this.state.query}
            onChange={e => this.loadQuery(e)}
          />
        </form>
        <div>
          {this.state.beerList.map(beer => {
            return (
              <BeerDetailsSmall
                key={beer._id}
                _id={beer._id}
                image_url={beer.image_url}
                name={beer.name}
                tagline={beer.tagline}
                contributed_by={beer.contributed_by}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BeerOverview;
