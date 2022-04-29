//import logo from "./logo.svg";
import "./App.css";
import { ReactDOM } from "react";
import { useEffect, useState } from "react";
import api, { api_key } from "./axios";
import { BrowserRouter } from "react-router-dom";
import MovieList from "./MovieList";
function App() {
  // const [data, setdata] = useState([]);
  // const apiUpcoming = api.get("movie/upcoming", { params: { api_key } });
  // useEffect(() => {
  //   const data = async () => {
  //     const response = await apiUpcoming;
  //     setdata(response.data.results);
  //   };
  //   data();
  // }, []);
  // console.log(data);
  return (
    <BrowserRouter>
      <MovieList />
    </BrowserRouter>
  );
}

export default App;
