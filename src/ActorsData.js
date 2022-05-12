import React from "react";

const ActorsData = ({ data }) => {
  return (
    <div className="ActorData_container">
      {data.map((actor) => {
        return (
          <div>
            <div className="ActorsData_image">
              <img
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt=" "
                width={"50%"}
                height={"50%"}
              ></img>
            </div>
            <div>{actor.name}</div>
          </div>
        );
      })}
    </div>
  );
};
export default ActorsData;
