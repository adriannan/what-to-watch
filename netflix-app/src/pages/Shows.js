import React from "react";
import "../styles/pages.scss";

const Shows = () => {
  return (
    <section className="section__tvshows">
      <div className="tvshows__header">
        <h2 className="tvshows__tit">TV Shows</h2>
        <button className="tvshows__btn">
          Genres <i class="material-icons tvshows__btn-icon">arrow_drop_down</i>
        </button>
        <button className="tvshows__btn">
          Production
          <i class="material-icons tvshows__btn-icon">arrow_drop_down</i>
        </button>
        <button className="tvshows__btn">
          Year <i class="material-icons tvshows__btn-icon">arrow_drop_down</i>
        </button>
        <button className="tvshows__btn">
          Rate <i class="material-icons tvshows__btn-icon">arrow_drop_down</i>
        </button>
        <button className="tvshows__btn">
          Sort by{" "}
          <i class="material-icons tvshows__btn-icon">arrow_drop_down</i>
        </button>
      </div>
    </section>
  );
};

export default Shows;
