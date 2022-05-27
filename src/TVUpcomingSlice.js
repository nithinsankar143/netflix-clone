import React from "react";
import { useEffect, useState } from "react";
import api, { api_key } from "./axios";
import TVDataSlice from "./TVDataSlice";
function TVUpcomingSlice() {
  const [data, setdata] = useState([]);
  const apiUpcoming = api.get("/tv/airing_today", { params: { api_key } });
  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setdata(response.data.results);
    };
    data();
  }, []);
  //console.log(data);

  return <TVDataSlice data={data} />;
}

export default TVUpcomingSlice;
