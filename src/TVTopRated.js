import React from "react";
import { useEffect, useState } from "react";
import api, { api_key } from "./axios";
import TVData from "./TVData";
function TVTopRated() {
  const [data, setdata] = useState([]);
  const apiUpcoming = api.get("/tv/top_rated", { params: { api_key } });
  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setdata(response.data.results);
    };
    data();
  }, []);
  //console.log(data);

  return <TVData data={data} />;
}

export default TVTopRated;
