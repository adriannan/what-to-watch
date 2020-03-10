import React, { Component } from "react";
import "../styles/App.scss";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from "react-router-dom";
// import fetchMovies from "./netflix-api/fetchMovies.js";
import Header from "../components/Header";
import Home from "../pages/Home";
import Shows from "../pages/Shows";
import Movies from "../pages/Movies";
import Favorites from "../pages/Favorites";
import Profile from "../pages/Profile";
import Error from "../pages/Error";

class App extends Component {
  // console.log(fetchMovies());
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="backgroundContainer" />
        <div className="app">
          <header>
            <Header />
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv-shows" component={Shows} />
            <Route path="/movies" component={Movies} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/profile" component={Profile} />
            {/* <Route path="/register" component={RegisterPage} /> */}
            <Route component={Error} />
          </Switch>
          {/* <footer>{<Footer />}</footer> */}
        </div>
      </Router>
    );
  }
}
export default App;
