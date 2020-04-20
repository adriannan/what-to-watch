import React from 'react';
import { withFirebase } from '../../firebase';

const SignOutButton = ({ firebase }) => {
  return (
    <div className="header__link" onClick={firebase.handleSignOut}>
      Sign Out
    </div>
  );
};

export default withFirebase(SignOutButton);
