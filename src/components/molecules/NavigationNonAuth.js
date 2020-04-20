import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from '../atoms/SearchInput';
import '../../styles/header.scss';
import { routes } from '../../routes';

const NavigationNonAuth = () => {
  return (
    <>
      <SearchInput />
      <NavLink to={routes.login} className="header__link">
        Sign In
      </NavLink>
    </>
  );
};

export default NavigationNonAuth;
