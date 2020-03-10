import React, { useState } from "react";
import "../styles/pages.scss";
import MovieCard from "../components/MovieCard";
import movies from "../netflix-api/movies.json";

let max = 6;

const Shows = () => {
  const moviesList = Object.values(movies);
  const seriesSort = moviesList.filter(item => item.type === "series");
  const series = seriesSort.map(show => (
    <MovieCard id={show.netflixid} {...show} />
  ));
  const [seriesPart, addSeries] = useState(series.slice(0, 6));
  function showMore() {
    max += 6;
    addSeries(series.slice(0, max));
  }
  return (
    <section className="section__tvshows">
      <div className="tvshows__header">
        <h2 className="tvshows__tit">TV Shows</h2>
        <button className="tvshows__btn">
          Genres{" "}
          <i className="material-icons tvshows__btn-icon">arrow_drop_down</i>
        </button>
        <button className="tvshows__btn">
          Production
          <i className="material-icons tvshows__btn-icon">arrow_drop_down</i>
        </button>
        <button className="tvshows__btn">
          Year{" "}
          <i className="material-icons tvshows__btn-icon">arrow_drop_down</i>
        </button>
        <button className="tvshows__btn">
          Rate{" "}
          <i className="material-icons tvshows__btn-icon">arrow_drop_down</i>
        </button>
        <button className="tvshows__btn">
          Sort by{" "}
          <i className="material-icons tvshows__btn-icon">arrow_drop_down</i>
        </button>
      </div>
      <div className="movies__main">{seriesPart}</div>
      <button className="movies__btn-more" onClick={showMore}>
        Show More
      </button>
    </section>
  );
};

export default Shows;
