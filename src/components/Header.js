import React from "react";
import { NavLink } from "react-router-dom";
import SearchInput from "./SearchInput";
import "../styles/header.scss";

const Header = () => {
  return (
    <div className="header">
      <nav className="header__nav">
        <NavLink to="/" exact className="header__link">
          <div>Home</div>
        </NavLink>
        <NavLink to="/tv-shows" className="header__link">
          <div>TV Shows</div>
        </NavLink>
        <NavLink to="/movies" className="header__link">
          <div>Movies</div>
        </NavLink>
      </nav>
      <div className="nav-right">
        <SearchInput />
        <NavLink to="/favorites" className="header__link">
          <div>Favorites</div>
        </NavLink>
        <NavLink to="/profile" className="header__link">
          <div>Profile</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
