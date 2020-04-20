import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';
import SignOutButton from './SignOutButton';
import '../styles/header.scss';
import { routes } from '../routes';

const NavigationAuth = () => {
  return (
    <>
      <SearchInput />
      <NavLink to={routes.favourites} className="header__link">
        <div>Favourites</div>
      </NavLink>
      <NavLink to={routes.profile} className="header__link">
        <div>Profile</div>
      </NavLink>
      <SignOutButton />
    </>
  );
};

export default NavigationAuth;
