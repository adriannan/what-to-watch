import React, { Component } from 'react';
import '../styles/pages.scss';
import MovieCard from '../components/molecules/MovieCard';
// import DropdownButton from '../components/atoms/DropdownButton';
import MoviesTopBar from '../components/molecules/MoviesTopBar';
import movies from '../netflix-api/movies.json';
// import { render } from '@testing-library/react';

class Movies extends Component {
  state = {
    movies: [],
    max: 6,
    selectedGenre: 'Genre',
    selectedYear: 'Year',
    selectedRate: 'Rate',
    // genresValues: ['Comedy', 'Horror', 'Thriller', 'Documentary'],
    // yearsValues: ["80's", "90's", "00's", "10's"],
    // ratesValues: ['5+', '4+', '3+'],
    // sortByValues: ['Year', 'Rate'],
  }

  componentDidMount() {
    const moviesList = Object.values(movies);
    const moviesSort = moviesList.filter((item) => item.type === 'movie');
    const movie = moviesSort.map((item) => <MovieCard id={item.netflixid} {...item} />);
    this.setState({
      movies: movie
    })
  }

  showMore = () => {
    this.setState(prevState => ({
      max: prevState.max + 6
    }))
  }

  select = (e, selectType) => {
    this.setState({
      selectType: e.target.value
    })
  }

  render() {
    const { movies, max, selectedGenre, selectedYear, selectedRate, genresValues, yearsValues, ratesValues, sortByValues } = this.state;
    return (
      <section className="section__movies">
        {/* <div className="movies__header">
          <h2 className="movies__tit">Movies</h2>
          <DropdownButton options={genresValues} placeholder={selectedGenre} handleSelect={(e) => this.select(e, 'genre')} />
          <DropdownButton options={yearsValues} placeholder={selectedYear} handleSelect={(e) => this.select(e, 'year')} />
          <DropdownButton options={ratesValues} placeholder={selectedRate} handleSelect={(e) => this.select(e, 'rate')} />
          <DropdownButton options={sortByValues} placeholder="Sort by" />
        </div> */}
        <MoviesTopBar {...this.state} />
        <div className="movies__main">{movies.slice(0, max)}</div>
        {/* <div className="movies__main">{moviesPart}</div> */}
        <button className="movies__btn-more" onClick={this.showMore}>
          Show More
      </button>
      </section>
    )
  }
};

export default Movies;
