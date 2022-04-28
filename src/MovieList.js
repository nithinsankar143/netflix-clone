import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UpComingMovies from "./UpComingMovies";
import NowPlaying from "./NowPlaying";
import PopularMovies from "./PopularMovies";
import TopRated from "./TopRated";
import "./App.css";
const MovieList = () => {
  return (
    <nav className="movielist">
      <Link to="/NowPlaying">NowPlaying</Link>
      <Link to="/UpcomingMovies">UpComingMovies</Link>
      <Link to="/PopularMovies">PopularMovies</Link>
      <Link to="/TopRated">TopRated</Link>
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
