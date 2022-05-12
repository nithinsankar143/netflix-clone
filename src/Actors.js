import React from "react";
import { useState, useEffect } from "react";
import api, { api_key } from "./axios";
import { useParams } from "react-router-dom";
import ActorsData from "./ActorsData";
const Actors = () => {
  const [data, setdata] = useState([]);
  const { movieid } = useParams();

  const apiUpcoming = api.get(`movie/${movieid}/credits`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setdata(response.data.cast);
      console.log("movie id", movieid);
    };
    data();
  }, [movieid]);
  // console.log(data);
  return <ActorsData data={data} />;
};
export default Actors;
