import React from "react";
import { useState, useEffect } from "react";
import api, { api_key } from "./axios";
import { useParams } from "react-router-dom";
import SimilarMoviesData from "./SimilarMoviesData";

const SimilarMovies = () => {
  const [data, setdata] = useState([]);
  const { movieid } = useParams();

  const apiUpcoming = api.get(`movie/${movieid}/similar`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setdata(response.data.results);
      // console.log("movie id", movieid);
    };
    data();
  }, [movieid]);
  console.log(data);
  return <SimilarMoviesData data={data} />;
};
export default SimilarMovies;
