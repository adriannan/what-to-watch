import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';
import SignOutButton from './SignOutButton';
import '../styles/header.scss';
import { routes } from '../routes';

const Header = ({ state }) => {
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
      <div className="nav-right">
        <SearchInput />
        <NavLink to={routes.favourites} className="header__link">
          <div>Favourites</div>
        </NavLink>
        <NavLink to={routes.profile} className="header__link">
          <div>Profile</div>
        </NavLink>
        {state ? (
          <SignOutButton />
        ) : (
          <NavLink to={routes.login} className="header__link">
            Sign In
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
