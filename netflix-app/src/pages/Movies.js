import React from "react";
import MovieCard from "../components/MovieCard";
import DropdownButton from "../components/DropdownButton";
import movies from "../netflix-api/movies.json";
import imdb from "../netflix-api/imdb.json";
import "../styles/pages.scss";

const Movies = () => {
  const moviesList = Object.values(movies);
  // const imdbList = Object.values(imdb);
  const movie = moviesList.map(movie => (
    <MovieCard id={movie.netflixid} {...movie} />
  ));
  const genresValues = ["comedy", "horror", "thriller", "documentary"];
  const yearsValues = ["80's", "90's", "00's", "10's"];
  const ratesValues = ["5+", "4+", "3+"];
  const sortByValues = ["year", "rate"];

  return (
    <section className="section__movies">
      <div className="movies__header">
        <h2 className="movies__tit">Movies</h2>
        <DropdownButton options={genresValues} placeholder="Genres" />
        <DropdownButton options={yearsValues} placeholder="Year" />
        <DropdownButton options={ratesValues} placeholder="Rate" />
        <DropdownButton options={sortByValues} placeholder="Sort by" />
      </div>
      <div className="movies__main">{movie}</div>
    </section>
  );
};

export default Movies;
