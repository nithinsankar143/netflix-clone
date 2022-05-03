import React from "react";
import NowPlayingMovie from "./NowPlayingMovie";
import UpComingMovies from "./UpComingMovies";
import PopularMovie from "./PopularMovie";
import TopRatedMovies from "./TopRatedMovies";
const Layout = () => {
  return (
    <div>
      <h2>NowPlaying</h2>
      <div>
        <NowPlayingMovie />
      </div>
      <h2>UpComing</h2>
      <div>
        <UpComingMovies />
      </div>
      <h2>Popular</h2>
      <div>
        <PopularMovie />
      </div>{" "}
      <h2>TopRated</h2>
      <div>
        <TopRatedMovies />
      </div>
    </div>
  );
};
export default Layout;
