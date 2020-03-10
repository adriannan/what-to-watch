import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error">
      <h1 className="error__tit">Page not found</h1>
      <p className="error__txt">
        Oh, we can’t find the page you’re looking for. Try going back to the
        previous page or go to our
        <Link to="/"> home page</Link>.
      </p>
    </section>
  );
};

export default Error;
