import React from "react";
import { useEffect, useState } from "react";
import api, { api_key } from "./axios";
import PeopleData from "./PeopleData";
function PeoplePopular() {
  const [data, setdata] = useState([]);
  const apiUpcoming = api.get("/person/popular", { params: { api_key } });
  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setdata(response.data.results);
    };
    data();
  }, []);
  //console.log(data);

  return <PeopleData data={data} />;
}

export default PeoplePopular;
