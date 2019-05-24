import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Link to="/">
      <div className="header-bar">
        <img src="/images/home.png" alt="home" />
      </div>
    </Link>
  );
};

export default Header;
