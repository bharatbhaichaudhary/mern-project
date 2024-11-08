import React from "react";
import { Link } from "react-router-dom";
import "./error.css"

const Error = () => {
  return (
    <section className="error_page">
      <div className="error_content">
        <h2 className="error_header">404</h2>
        <h4>Sorry! Page not found</h4>
        <p>
          Oops! It seems like page you're trying to access doesn't exist. If you
          believe there's an issue, feel free to report it, and we'll look into
          it.
        </p>
      </div>
      <div className="btns">
        <Link className="home_page_linl" to="/">return home </Link>
        <Link className="contect_page_linl" to="/contect">report problem</Link>
      </div>
    </section>
  );
};

export default Error;
