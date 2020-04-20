import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationAuth from '../molecules/NavigationAuth';
import NavigationNonAuth from '../molecules/NavigationNonAuth';
import '../../styles/header.scss';
import { routes } from '../../routes';

const Header = ({ authUser }) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink to={routes.home} exact className="header__link">
          <div>Home</div>
        </NavLink>
        <NavLink to={routes.tvshows} className="header__link">
          <div>TV Shows</div>
        </NavLink>
        <NavLink to={routes.movies} className="header__link">
          <div>Movies</div>
        </NavLink>
      </nav>
      <div className="nav-right">{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
    </header>
  );
};

export default Header;
