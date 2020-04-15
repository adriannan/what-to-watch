import React from 'react';
import { Redirect } from 'react-router-dom';
import { routes } from '../routes';

const Profile = ({ state }) => {
  if (!state) return <Redirect to={routes.login} />;

  return (
    <section className="section__profile">
      <div>Profile</div>
    </section>
  );
};

export default Profile;
