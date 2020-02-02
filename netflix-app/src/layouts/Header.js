import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <NavLink to="/">
          <div className="header__link">Home</div>
        </NavLink>
        <NavLink to="/tv-shows">
          <div className="header__link">TV Shows</div>
        </NavLink>
        <NavLink to="/movies">
          <div className="header__link">Movies</div>
        </NavLink>
      </nav>
      <div>
        <input />
        <NavLink to="/favorites">
          <div className="header__link">Favorites</div>
        </NavLink>
        <NavLink to="/profile">
          <div className="header__link">Profile</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
