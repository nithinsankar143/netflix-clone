import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UpComing from "./UpComing";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import GetMovieDetails from "./GetMovieDetails";
import "./App.css";
import logo from "./netflixlogo.jpg";
import { IoSearch } from "react-icons/io";
import Layout from "./Layout";
const MovieList = () => {
  return (
    <nav className="movielist_container">
      <div className="movielist_thumbnail">
        <div>
          <img src={logo} alt="" width={"120px"} height={"80px"}></img>
        </div>

        <div className="movielist">
          <Link to="/NowPlaying">NowPlaying</Link>
          <Link to="/Upcoming">UpComing</Link>
          <Link to="/Popular">Popular</Link>
          <Link to="/TopRated">TopRated</Link>
        </div>
        <b>TV Show</b>
        <b>People</b>
        <b>more</b>
        <div className="lang">
          <b>Language</b>
        </div>

        <b>LOG IN</b>
        {/* <div>
          <IoSearch />
        </div> */}
        <b>IoSearch</b>
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
