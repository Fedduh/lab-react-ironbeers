import React, { Component } from "react";

import Header from "./Header.js";
import Axios from "axios";

class AddNewBeer extends Component {
  state = {
    newBeer: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: ''
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.newBeer);
    Axios.post(
      "https://ih-beer-api.herokuapp.com/beers/new",
      this.state.newBeer
    ).then(result => {
      console.log(result);
    });
  };

  handleChangeInput = e => {
    let newBeer = { ...this.state.newBeer, [e.target.name]: e.target.value };
    this.setState({
      newBeer: newBeer
    });
  };

  render() {
    return (
      <div>
        <Header />
        <h2>Add a new beer</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.newBeer.name}
            onChange={e => this.handleChangeInput(e)}
          />
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            value={this.state.newBeer.tagline}
            onChange={e => this.handleChangeInput(e)}
          />
          <label>Description</label>
          <input
            className="input-large"
            type="text"
            name="description"
            value={this.state.newBeer.description}
            onChange={e => this.handleChangeInput(e)}
          />
          <label>First brewed</label>
          <input
            type="text"
            name="first_brewed"
            value={this.state.newBeer.first_brewed}
            onChange={e => this.handleChangeInput(e)}
          />
          <label>Brewers tips</label>
          <input
            type="text"
            name="brewers_tips"
            value={this.state.newBeer.brewers_tips}
            onChange={e => this.handleChangeInput(e)}
          />
          <label>Attenuation level</label>
          <input
            type="number"
            name="attenuation_level"
            value={this.state.newBeer.attenuation_level}
            onChange={e => this.handleChangeInput(e)}
          />
          <label>Contributed by</label>
          <input
            type="text"
            name="contributed_by"
            value={this.state.newBeer.contributed_by}
            onChange={e => this.handleChangeInput(e)}
          />
          <button type="submit">ADD NEW</button>
        </form>
      </div>
    );
  }
}

export default AddNewBeer;
