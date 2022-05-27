import React from "react";
import { Link } from "react-router-dom";
import TVTopRatedSlice from "./TVTopRatedSlice";
import TVPopularSlice from "./TVPopularSlice";
import TVNowPlayingSlice from "./TVNowplayingSlice";
import TVUpcomingSlice from "./TVUpcomingSlice";
const TVLayout = () => {
  return (
    <nav className="container_layout">
      <div className="home popular">
        <h2>
          <Link
            className="link_layout"
            style={{ textDecoration: "none" }}
            to="/TVNowPlaying"
          >
            NOW PLAYING
          </Link>
        </h2>
        <div>
          <TVNowPlayingSlice />
        </div>
      </div>
      <div className="home popular">
        <h2>
          <Link
            className="link_layout"
            style={{ textDecoration: "none" }}
            to="/TVUpcoming"
          >
            UPCOMING
          </Link>
        </h2>
        <div>
          <TVUpcomingSlice />
        </div>
      </div>
      <div className="home popular">
        <h2>
          <Link
            className="link_layout"
            style={{ textDecoration: "none" }}
            to="/TVPopular"
          >
            POPULAR
          </Link>
        </h2>
        <div>
          <TVPopularSlice />
        </div>
      </div>
      <div className="home popular">
        <h2>
          <Link
            className="link_layout"
            style={{ textDecoration: "none" }}
            to="/TVTopRated"
          >
            TOP RATED
          </Link>
        </h2>
        <div>
          <TVTopRatedSlice />
        </div>
      </div>
    </nav>
  );
};
export default TVLayout;
