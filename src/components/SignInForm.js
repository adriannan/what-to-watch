import React, { Component } from 'react';
import { routes } from '../routes';
import './signForm.scss';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = (e) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(routes.home);
      })
      .catch((error) => {
        this.setState({ error });
      });
    e.preventDefault();
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <form className="login__form" onSubmit={this.handleSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.handleChange}
          type="text"
          placeholder="Email"
        />
        <input
          name="password"
          value={password}
          onChange={this.handleChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} className="login__btn">
          Sign In
        </button>
        {error && <div>{error.message}</div>}
      </form>
    );
  }
}

export default SignInForm;
