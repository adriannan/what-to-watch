import React, { useState } from 'react';
import '../styles/pages.scss';
import MovieCard from '../components/MovieCard';
import DropdownButton from '../components/DropdownButton';
import movies from '../netflix-api/movies.json';
import imdb from '../netflix-api/imdb.json';
import '../styles/pages.scss';

let max = 6;

const Movies = () => {
  const moviesList = Object.values(movies);
  const moviesSort = moviesList.filter((item) => item.type === 'movie');
  const movie = moviesSort.map((movie) => <MovieCard id={movie.netflixid} {...movie} />);

  const genresValues = ['Comedy', 'Horror', 'Thriller', 'Documentary'];
  const yearsValues = ["80's", "90's", "00's", "10's"];
  const ratesValues = ['5+', '4+', '3+'];
  const sortByValues = ['Year', 'Rate'];

  const [moviesPart, addMovies] = useState(movie.slice(0, 6));
  function showMore() {
    max += 6;
    addMovies(movie.slice(0, max));
  }

  return (
    <section className="section__movies">
      <div className="movies__header">
        <h2 className="movies__tit">Movies</h2>
        <DropdownButton options={genresValues} placeholder="Genres" />
        <DropdownButton options={yearsValues} placeholder="Year" />
        <DropdownButton options={ratesValues} placeholder="Rate" />
        <DropdownButton options={sortByValues} placeholder="Sort by" />
      </div>
      <div className="movies__main">{moviesPart}</div>
      <button className="movies__btn-more" onClick={showMore}>
        Show More
      </button>
    </section>
  );
};

export default Movies;
