import React from "react";
import NowPlayingMovie from "./NowPlayingMovie";
import UpComingMovies from "./UpComingMovies";
import PopularMovie from "./PopularMovie";
import TopRatedMovies from "./TopRatedMovies";
const Layout = () => {
  return (
    <div className="container_layout">
      <div className="home nowplaying">
        <h2>NOW PLAYING</h2>
        <div>
          <NowPlayingMovie />
        </div>
      </div>
      <div className="home upcoming">
        <h2>UPCOMING</h2>
        <div>
          <UpComingMovies />
        </div>
      </div>
      <div className="home popular">
        <h2>POPULAR</h2>
        <div>
          <PopularMovie />
        </div>
      </div>
      <div className="home toprated">
        <h2>TOP RATED</h2>
        <div>
          <TopRatedMovies />
        </div>
      </div>
    </div>
  );
};
export default Layout;
