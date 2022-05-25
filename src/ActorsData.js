import React from "react";

const ActorsData = ({ data }) => {
  return (
    <div className="ActorData_container">
      {data.map((actor) => {
        return (
          <div className="ActorData_thumbnail">
            <div className="ActorsData_image">
              <img
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt=" "
                width={"130px"}
                height={"150px"}
              ></img>
            </div>
            <div className="Actor_name">
              <b>{actor.name}</b>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ActorsData;
