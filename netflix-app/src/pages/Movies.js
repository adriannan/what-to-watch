import React from "react";
import "../styles/pages.scss";
import MovieCard from "../components/MovieCard";
import movies from "../netflix-api/movies.json";
// import imdb from "../netflix-api/imdb.json";

const Movies = () => {
  const moviesList = Object.values(movies);
  // const imdbList = Object.values(imdb);
  const movie = moviesList.map(movie => (
    <MovieCard id={movie.netflixid} {...movie} />
  ));

  return (
    <section className="section__movies">
      <div className="movies__header">
        <h2 className="movies__tit">Movies</h2>
        <button className="movies__btn">
          Genres <i class="material-icons movies__btn-icon">arrow_drop_down</i>
        </button>
        <button className="movies__btn">
          Production
          <i class="material-icons movies__btn-icon">arrow_drop_down</i>
        </button>
        <button className="movies__btn">
          Year <i class="material-icons movies__btn-icon">arrow_drop_down</i>
        </button>
        <button className="movies__btn">
          Rate <i class="material-icons movies__btn-icon">arrow_drop_down</i>
        </button>
        <button className="movies__btn">
          Sort by <i class="material-icons movies__btn-icon">arrow_drop_down</i>
        </button>
      </div>
      <div className="movies__main">{movie}</div>
    </section>
  );
};

export default Movies;
