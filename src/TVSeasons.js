import React from "react";
import { useState, useEffect } from "react";
import api, { api_key } from "./axios";
import { useParams } from "react-router-dom";
import TVSeasonsData from "./TVSeasonsData";
const TVSeasons = () => {
  const [data, setdata] = useState([]);
  const { tv_id, season_number } = useParams();

  const apiUpcoming = api.get(`/tv/${tv_id}/season/${season_number}`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setdata(response.data.crew);
      console.log("TV id", tv_id);
    };
    data();
  }, [tv_id]);
  // console.log(data);
  return <TVSeasonsData data={data} />;
};
export default TVSeasons;
