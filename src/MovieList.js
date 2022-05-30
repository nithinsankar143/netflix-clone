import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import logo from "./netflixlogo.jpg";

import TVPopularSlice from "./TVPopularSlice";
import TVLayout from "./TVLayout";
const MovieList = () => {
  return (
    <nav className="movielist_container">
      <div className="movielist_thumbnail">
        <div>
          <img src={logo} alt="" width={"120px"} height={"80px"}></img>
        </div>

        <b className="movielist">
          {/* <Link to="/Layout">Movies</Link> */}
          <Link
            className="link_layout"
            style={{ textDecoration: "none" }}
            to="/NowPlaying"
          >
            NowPlaying
          </Link>
          <Link
            className="link_layout"
            style={{ textDecoration: "none" }}
            to="/Upcoming"
          >
            UpComing
          </Link>
          <Link
            className="link_layout"
            style={{ textDecoration: "none" }}
            to="/Popular"
          >
            Popular
          </Link>
          <Link
            className="link_layout"
            style={{ textDecoration: "none" }}
            to="/TopRated"
          >
            TopRated
          </Link>
        </b>
        <b>
          <Link
            className="link_layout"
            style={{ textDecoration: "none" }}
            to="/TVLayout"
          >
            {" "}
            TV Show
          </Link>
        </b>
        <b>
          <Link
            className="link_layout"
            style={{ textDecoration: "none" }}
            to="/PeopleLayout"
          >
            {" "}
            PEOPLE
          </Link>
        </b>
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
