import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { routes } from '../routes';
import SignUpForm from '../components/SignUpForm';
import { withFirebase } from '../firebase';

const SignUpFormRouter = withRouter(withFirebase(SignUpForm));

const RegisterPage = () => {
  return (
    <section className="section__register">
      <div className="register__container">
        <h1 className="register__tit">Sign Up</h1>
        <SignUpFormRouter />
        <p>
          Already have an account? <Link to={routes.login}>Sign in</Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
