import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UpComing from "./UpComing";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import "./App.css";
import Layout from "./Layout";
const MovieList = () => {
  return (
    <nav>
      <div className="containers">
        <b>NETFLIX</b>
        <b>People</b>
        <div className="movielist">
          <Link to="/NowPlaying">NowPlaying</Link>
          <Link to="/Upcoming">UpComing</Link>
          <Link to="/Popular">Popular</Link>
          <Link to="/TopRated">TopRated</Link>
        </div>

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
      </Routes>
    </nav>
  );
};
export default MovieList;
