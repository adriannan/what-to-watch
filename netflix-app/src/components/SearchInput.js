import React from "react";
import "../styles/header.scss";

const SearchInput = () => {
  return (
    <div className="header__search">
      <input className="search__input" type="search"></input>
      <button className="search__btn">
        <i className="material-icons">search</i>
      </button>
    </div>
  );
};

export default SearchInput;
