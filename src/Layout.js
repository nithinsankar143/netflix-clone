import React from "react";
import NowPlayingMovie from "./NowPlayingMovie";
import UpComingMovies from "./UpComingMovies";
import PopularMovie from "./PopularMovie";
import TopRatedMovies from "./TopRatedMovies";
import { Link } from "react-router-dom";
const Layout = () => {
  return (
    <div className="container_layout">
      <div className="home nowplaying">
        <h2>
          {" "}
          <Link className="link_layout" to="/NowPlaying">
            NOW PLAYING
          </Link>
        </h2>
        <div>
          <NowPlayingMovie />
        </div>
      </div>
      <div className="home upcoming">
        <h2>
          <Link className="link_layout" to="/Upcoming">
            UPCOMING
          </Link>
        </h2>
        <div>
          <UpComingMovies />
        </div>
      </div>
      <div className="home popular">
        <h2>
          {" "}
          <Link className="link_layout" to="/Popular">
            POPULAR
          </Link>
        </h2>
        <div>
          <PopularMovie />
        </div>
      </div>
      <div className="home toprated">
        <h2>
          <Link className="link_layout" to="/TopRated">
            TOP RATED
          </Link>
        </h2>
        <div>
          <TopRatedMovies />
        </div>
      </div>
    </div>
  );
};
export default Layout;
