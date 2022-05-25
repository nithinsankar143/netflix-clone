import React from "react";
import { Link } from "react-router-dom";

const FewActorData = ({ data }) => {
  return (
    <div className="ActorData">
      <div className="ActorData_container">
        {data.slice(0, 6).map((actor) => {
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
      <div className="LoadMore">
        <Link to="./Actors">LoadMore</Link>
      </div>
    </div>
  );
};
export default FewActorData;
