import React from "react";
const ActorsData = ({ data }) => {
  return (
    <div>
      {data.map((actor) => {
        return (
          <div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt=" "
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
