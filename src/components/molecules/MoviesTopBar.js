import React from 'react';
import '../../styles/pages.scss';
import DropdownButton from '../atoms/DropdownButton';

const MoviesTopBar = () => {
    const genresValues = ['Comedy', 'Horror', 'Thriller', 'Documentary'];
    const yearsValues = ["80's", "90's", "00's", "10's"];
    const ratesValues = ['5+', '4+', '3+'];
    const sortByValues = ['Year', 'Rate'];

    return (
        <div className="movies__header">
            <h2 className="movies__tit">Movies</h2>
            <DropdownButton options={genresValues} placeholder="Genres" />
            <DropdownButton options={yearsValues} placeholder="Year" />
            <DropdownButton options={ratesValues} placeholder="Rate" />
            <DropdownButton options={sortByValues} placeholder="Sort by" />
        </div>
    );
};

export default MoviesTopBar;
