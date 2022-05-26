import React from "react";
import { useState, useEffect } from "react";
import api, { api_key } from "./axios";
import { useParams } from "react-router-dom";
import ActorDetails from "./ActorDetails";

const ActorDetail1 = () => {
  const [data, setdata] = useState([]);
  const { person_id } = useParams();

  const apiUpcoming = api.get(`person/${person_id}`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setdata(response.data);
      console.log("movie id", person_id);
    };
    data();
  }, [person_id]);
  // console.log(data);
  return <ActorDetails data={data} />;
};
export default ActorDetail1;
