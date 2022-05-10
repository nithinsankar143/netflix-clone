import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UpComing from "./UpComing";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import GetMovieDetails from "./GetMovieDetails";
import "./App.css";
import Layout from "./Layout";
const MovieList = () => {
  return (
    <nav className="nav_container">
      <div className="containers">
        <b>NETFLIX</b>

        <div className="movielist">
          <Link to="/NowPlaying">NowPlaying</Link>
          <Link to="/Upcoming">UpComing</Link>
          <Link to="/Popular">Popular</Link>
          <Link to="/TopRated">TopRated</Link>
        </div>
        <b>TV Show</b>
        <b>People</b>
        <b>more</b>
        <b>Language</b>
        <b>dp</b>
        <b>search</b>
      </div>

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/NowPlaying" element={<NowPlaying />} />
        <Route path="/Upcoming" element={<UpComing />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/TopRated" element={<TopRated />} />
        <Route path="movies/:movieid" element={<GetMovieDetails />} />
      </Routes>
    </nav>
  );
};
export default MovieList;
