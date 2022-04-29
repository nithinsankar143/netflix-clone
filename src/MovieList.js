import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UpComingMovies from "./UpComingMovies";
import NowPlaying from "./NowPlaying";
import PopularMovies from "./Popular";
import TopRated from "./TopRated";
import "./App.css";
const MovieList = () => {
  return (
    <nav>
      <div className="containers">
        <div>NETFLIX</div>
        <div>People</div>
        <div className="movielist">
          <Link to="/NowPlaying">NowPlaying</Link>
          <Link to="/UpcomingMovies">UpComingMovies</Link>
          <Link to="/PopularMovies">PopularMovies</Link>
          <Link to="/TopRated">TopRated</Link>
        </div>
        <div>more</div>
        <div>Language</div>
        <div>dp</div>
        <div>search</div>
      </div>
      <Routes>
        <Route path="/NowPlaying" element={<NowPlaying />} />
        <Route path="/UpcomingMovies" element={<UpComingMovies />} />
        <Route path="/PopularMovies" element={<PopularMovies />} />
        <Route path="/TopRated" element={<TopRated />} />
      </Routes>
    </nav>
  );
};
export default MovieList;
