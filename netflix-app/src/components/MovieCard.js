import React, { useState } from "react";
import "../styles/components.scss";
import movieImg from "../images/movie.png";

const MovieCard = ({ title, image, released, runtime, rating, synopsis }) => {
  const [visible, setVisible] = useState(false);
  const [imageSrc, changeImage] = useState(image);
  function changeVisibleDescription() {
    setVisible(!visible);
  }
  function changeImageSrc() {
    changeImage(movieImg);
  }
  function showError() {
    changeImageSrc();
  }

  const regex = /(<([^>]+)>)/gi;
  const description = synopsis.replace(regex, " ").replace("&#39;", "'");

  return (
    <div
      className={visible ? "movie__card movie__card-preview" : "movie__card"}
      onMouseEnter={changeVisibleDescription}
      onMouseLeave={changeVisibleDescription}
    >
      <div className="movie__img">
        <img src={imageSrc} onError={showError} alt="movie"></img>
      </div>
      <div className="movie__info">
        <h2 className="movie__tit">{title}</h2>
        <h3 className="movie__year">{released}</h3>
        <p className="movie__time">{runtime}</p>
        <p className="movie__rate">
          <i class="material-icons">star</i>
          {Math.round(rating * 10) / 10}
        </p>
      </div>
      {visible && <div className="movie__description">{description}</div>}
    </div>
  );
};

export default MovieCard;
