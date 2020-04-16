import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { routes } from '../routes';
import SignUpForm from '../components/SignUpForm';
import { FirebaseContext } from '../firebase';
const SignUpFormRouter = withRouter(SignUpForm);

const RegisterPage = () => {
  return (
    <section className="section__register">
      <div className="register__container">
        <h1 className="register__tit">Sign Up</h1>
        <FirebaseContext.Consumer>
          {(firebase) => <SignUpFormRouter firebase={firebase} />}
        </FirebaseContext.Consumer>
        <p>
          Already have an account? <Link to={routes.login}>Sign in</Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
