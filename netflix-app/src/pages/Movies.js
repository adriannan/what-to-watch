import React from "react";
import "../styles/pages.scss";

const Movies = () => {
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
    </section>
  );
};

export default Movies;
