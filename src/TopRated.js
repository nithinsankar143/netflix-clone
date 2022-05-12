import React from "react";
import { useEffect, useState } from "react";
import api, { api_key } from "./axios";
import MovieGrid from "./MovieGrid";
function TopRated() {
  const [data, setdata] = useState([]);
  const apiUpcoming = api.get("movie/top_rated", { params: { api_key } });
  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setdata(response.data.results);
    };
    data();
  }, []);
  // console.log(data);
  return <MovieGrid data={data} />;
}

export default TopRated;
