import React from "react";

import HomeItem from "./HomeItem.js";

const HomeMenu = () => {
  return (
    <div>
      <HomeItem
        title="All Beers"
        body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        img="/images/beers.png"
        link="/beers"
      />
      <HomeItem
        title="(not so) Random Beer"
        body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        img="/images/random-beer.png"
        link="/beers/random"
      />
      <HomeItem
        title="New Beer"
        body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        img="/images/new-beer.png"
        link="/new-beer"
      />
    </div>
  );
};

export default HomeMenu;
