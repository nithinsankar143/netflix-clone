import React from "react";
import { useEffect, useState } from "react";
import api, { api_key } from "./axios";
import FewMovieGrid from "./FewMovieGrid";
function UpComingMovies() {
  const [data, setdata] = useState([]);
  const apiUpcoming = api.get("movie/upcoming", { params: { api_key } });
  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setdata(response.data.results);
    };
    data();
  }, []);
  console.log(data);
  return <FewMovieGrid data={data} />;
}

export default UpComingMovies;
