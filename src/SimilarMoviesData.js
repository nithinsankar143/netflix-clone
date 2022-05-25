import { Link } from "react-router-dom";
import React from "react";
const SimilarMoviesData = ({ data }) => {
  return (
    <div>
      {data.map((similar) => {
        return (
          <div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${similar.poster_path}`}
                alt=" "
                width={"100%"}
                height={"70%"}
              ></img>
            </div>
            <div>
              <b>{similar.title}</b>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SimilarMoviesData;
