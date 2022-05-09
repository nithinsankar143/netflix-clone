import React from "react";
import { useState, useEffect } from "react";
import api, { api_key } from "./axios";
import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
const GetMovieDetails = () => {
  const [data, setdata] = useState([]);
  const { movieid } = useParams();

  const apiUpcoming = api.get(`movie/${movieid}`, { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setdata(response.data);
      console.log("movie id", movieid);
    };
    data();
  }, [movieid]);
  console.log(data);
  return <MovieDetails data={data} />;
};
export default GetMovieDetails;
