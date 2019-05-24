import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomeMenu from './components/HomeMenu.js';
import BeerOverview from './components/BeerOverview.js';
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer.js';
import AddNewBeer from './components/AddNewBeer.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomeMenu} /> 
        <Route exact path="/beers" component={BeerOverview} />
        <Route path="/beers/:beerId" component={BeerDetails} />
        <Route path="/beers/random" component={RandomBeer} />
        <Route path="/new-beer" component={AddNewBeer} />
      </Switch>
    </div>
  );
}

export default App;
