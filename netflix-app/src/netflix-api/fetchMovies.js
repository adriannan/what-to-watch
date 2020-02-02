// import React from "react";

const fetchMovies = () => {
  fetch(
    "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew7%3APL&p=1&t=ns&st=adv",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
        "x-rapidapi-key": "7a63220619mshff4ce1e8d7aeef2p10044cjsn68e186f38270"
      }
    }
  )
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
};

export default fetchMovies;
