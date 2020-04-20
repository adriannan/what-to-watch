import React from 'react';
import { Redirect } from 'react-router-dom';
import { routes } from '../routes';

const Favourites = ({ authUser }) => {
  if (!authUser) return <Redirect to={routes.login} />;

  return (
    <section className="section__fav">
      <div>Favourites</div>
    </section>
  );
};

export default Favourites;
