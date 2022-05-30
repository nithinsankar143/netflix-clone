//import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import TVLayout from "./TVLayout";
import TVPopular from "./TVPopular";
import UpComing from "./UpComing";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import GetMovieDetails from "./GetMovieDetails";
import Actors from "./Actors";
import Layout from "./Layout";
import ActorDetail1 from "./ActorDetail1";
import TVTopRated from "./TVTopRated";
import TVNowPlaying from "./TVNowPlaying";
import TVUpcoming from "./TVUpcoming";
import SimilarMovies from "./SimilarMovies";
import PeopleLayout from "./PeopleLayout";
import PeoplePopular from "./PeoplePopular";
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
        <Route path="/SimilarMovies:movieid" element={<SimilarMovies />} />
        <Route>
          <Route path="/TVLayout" element={<TVLayout />} />
          <Route path="/TVPopular" element={<TVPopular />} />
          <Route path="/TVTopRated" element={<TVTopRated />} />
          <Route path="/TVNowPlaying" element={<TVNowPlaying />} />
          <Route path="/TVUpcoming" element={<TVUpcoming />} />
        </Route>
        <Route>
          <Route path="/PeopleLayout" element={<PeopleLayout />} />
          <Route path="/PeoplePopular" element={<PeoplePopular />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
