import React, { Component } from 'react';
import '../styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
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
    isSignedIn: false,
    favourites: [],
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }));
  }

  handleSignOut() {
    firebase.auth().signOut();
  }

  render() {
    const { isSignedIn, favourites } = this.state;
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="backgroundContainer" />
        <div className="app">
          <Header state={isSignedIn} signOut={this.handleSignOut} />
          <Switch>
            <Route path={routes.home} exact component={Home} />
            <Route path={routes.tvshows} component={Shows} />
            <Route path={routes.movies} component={Movies} />
            <Route path={routes.favourites} component={Favourites} />
            <Route path={routes.profile} render={() => <Profile state={isSignedIn} />} />
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
