//import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import UpComing from "./UpComing";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import GetMovieDetails from "./GetMovieDetails";
import Actors from "./Actors";
import Layout from "./Layout";
import ActorDetail1 from "./ActorDetail1";
function App() {
  return (
    <div>
      <MovieList />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/NowPlaying" element={<NowPlaying />} />
        <Route path="/Upcoming" element={<UpComing />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/TopRated" element={<TopRated />} />
        <Route path="movies/:movieid" element={<GetMovieDetails />} />
        <Route path="/Actors" element={<Actors />} />
        <Route path="/ActorDetail1/:person_id" element={<ActorDetail1 />} />

        {/* <Route>
          <Route path="/" element={<TVLayout />} />
          <Route path="/TVPopular" element={<TVPopular />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
