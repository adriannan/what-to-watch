import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const { username, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(username, password)
      .then((authUser) => {
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
    const { username, password, error } = this.state;
    const isInvalid = password === '' || username === '';
    return (
      <form className="login__form" onSubmit={this.handleSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.handleChange}
          type="text"
          placeholder="Username"
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
