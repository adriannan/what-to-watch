import React, { Component } from 'react';
import '../styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/organisms/Header';
import Home from '../pages/Home';
import Shows from '../pages/Shows';
import Movies from '../pages/Movies';
import Favourites from '../pages/Favourites';
import Profile from '../pages/Profile';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ErrorPage from '../pages/ErrorPage';
import { routes } from '../routes';
import firebase from 'firebase/app';

class App extends Component {
  state = {
    authUser: false,
    favourites: [],
  };
  componentDidMount() {
    this.firebaseListener = firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ authUser: !!user }));
  }
  componentWillUnmount() {
    this.firebaseListener();
  }
  render() {
    const { authUser, favourites } = this.state;
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="backgroundContainer" />
        <div className="app">
          <Header authUser={authUser} />
          <Switch>
            <Route path={routes.home} exact component={Home} />
            <Route path={routes.tvshows} component={Shows} />
            <Route path={routes.movies} component={Movies} />
            {/* <Route path={routes.favourites} component={Favourites} /> */}
            <Route path={routes.favourites} render={() => <Favourites authUser={authUser} />} />
            <Route path={routes.profile} render={() => <Profile authUser={authUser} />} />
            <Route path={routes.login} component={LoginPage} />
            <Route path={routes.register} component={RegisterPage} />

            <Route component={ErrorPage} />
          </Switch>
          {/* <footer>{<Footer />}</footer> */}
        </div>
      </Router>
    );
  }
}
export default App;
