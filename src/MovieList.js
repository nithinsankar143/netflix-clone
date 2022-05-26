import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import logo from "./netflixlogo.jpg";

import TVDetails from "./TVDetails";
import TVLayout from "./TVLayout";
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
        <b>
          <TVDetails />
          TV Show
        </b>
        <b>People</b>
        <b>more</b>
        <div className="lang">
          <b>Language</b>
        </div>

        <b>LOG IN</b>

        <b>Search</b>
      </div>
    </nav>
  );
};
export default MovieList;
