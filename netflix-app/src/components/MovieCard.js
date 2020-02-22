import React from "react";
import "../styles/components.scss";

const MovieCard = ({ title, image, relased, runtime, rating }) => {
  return (
    <div className="movie__card">
      <img src={image} alt="movie"></img>
      <h3 className="movie__tit">{title}</h3>
      <p className="movie__year">{relased}</p>
      <p className="movie__time">{runtime}</p>
      <p className="movie__rate">
        <i class="material-icons">star</i>
        {rating}
      </p>
    </div>
  );
};

export default MovieCard;
