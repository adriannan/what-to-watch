import React, { Component } from 'react';
import { routes } from '../routes';
import './signForm.scss';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  passwordConf: '',
  error: null,
};

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = (e) => {
    const { username, email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
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
    const { username, email, password, passwordConf, error } = this.state;
    const isInvalid =
      password !== passwordConf || password === '' || email === '' || username === '';
    return (
      <form className="register__form" onSubmit={this.handleSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.handleChange}
          type="text"
          placeholder="Username"
        />
        <input
          name="email"
          value={email}
          onChange={this.handleChange}
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          value={password}
          onChange={this.handleChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordConf"
          value={passwordConf}
          onChange={this.handleChange}
          type="password"
          placeholder="Confirm password"
        />
        <button disabled={isInvalid} className="register__btn">
          Create an account
        </button>
        {error && <div>{error.message}</div>}
      </form>
    );
  }
}

export default SignUpForm;
