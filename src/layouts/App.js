import React, { Component } from 'react';
import '../styles/App.scss';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Shows from '../pages/Shows';
import Movies from '../pages/Movies';
import Favourites from '../pages/Favourites';
import Profile from '../pages/Profile';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';
import { routes } from '../routes';

class App extends Component {
  state = {
    isLoggedIn: false,
    favourites: [],
  };
  render() {
    const { isLoggedIn, favourites } = this.state;
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="backgroundContainer" />
        <div className="app">
          <Header />
          <Switch>
            <Route path={routes.home} exact component={Home} />
            <Route path={routes.tvshows} component={Shows} />
            <Route path={routes.movies} component={Movies} />
            <Route path={routes.favourites} component={Favourites} />
            <Route
              path={routes.profile}
              render={() => (isLoggedIn ? Profile : <Redirect to={routes.login} />)}
            />
            <Route path={routes.login} component={LoginPage} />
            <Route component={ErrorPage} />
          </Switch>
          {/* <footer>{<Footer />}</footer> */}
        </div>
      </Router>
    );
  }
}
export default App;
