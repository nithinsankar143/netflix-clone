import React from "react";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import TVPopular from "./TVPopular";
const TVLayout = () => {
  return (
    <div>
      <div>
        <MovieList />
      </div>

      <div>
        <h2>
          <Link to="/TVPopular">TV POPULAR</Link>
        </h2>
        <div>
          <TVPopular />
        </div>
      </div>
    </div>
  );
};
export default TVLayout;
