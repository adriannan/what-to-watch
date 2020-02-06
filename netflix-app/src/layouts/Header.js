import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.scss";
import SearchInput from "../components/SearchInput";

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
        {/* <input className="header__input" /> */}
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
