import React from "react";
import { Link } from "react-router-dom";

const ActorsData = ({ data }) => {
  return (
    <div className="ActorData_container">
      {data.map((actor) => {
        return (
          <Link
            className="ActorData_thumbnail"
            to={`/ActorDetail1/${actor.id}`}
          >
            <div className="ActorsData_image">
              <img
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt=" "
                width={"150px"}
                height={"180px"}
              ></img>
            </div>
            <div className="Actor_name">
              <b>{actor.name}</b>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ActorsData;
