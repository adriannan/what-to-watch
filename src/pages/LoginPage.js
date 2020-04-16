import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { routes } from '../routes';
import SignInForm from '../components/SignInForm';
import { FirebaseContext } from '../firebase';

const SignInFormRouter = withRouter(SignInForm);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: routes.home,
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

const LoginPage = () => {
  return (
    <section className="section__login">
      <div className="login__container">
        <FirebaseContext.Consumer>
          {(firebase) => <SignInFormRouter firebase={firebase} />}
        </FirebaseContext.Consumer>
        <p>
          Don’t have an account? <Link to={routes.register}>Sign up</Link>
        </p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    </section>
  );
};

export default LoginPage;
