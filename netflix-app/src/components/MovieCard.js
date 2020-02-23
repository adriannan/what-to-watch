import React from "react";
import "../styles/components.scss";

const MovieCard = ({ title, image, relased, runtime, rating }) => {
  return (
    <div className="movie__card">
      <div className="movie__img">
        <img src={image} alt="movie"></img>
      </div>
      <div className="movie__info">
        <h3 className="movie__tit">{title}</h3>
        <p className="movie__year">{relased}</p>
        <p className="movie__time">{runtime}</p>
        <p className="movie__rate">
          <i class="material-icons">star</i>
          {Math.round(rating * 10) / 10}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
