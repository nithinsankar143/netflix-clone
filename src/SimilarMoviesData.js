import { Link } from "react-router-dom";
import React from "react";
const SimilarMoviesData = ({ data }) => {
  return (
    <div className="SimilarMoviesData_container">
      {data?.length > 0 &&
        data.map((similar) => {
          return (
            <div className="SimilarMovieData_thumbnail">
              <div className="SimilarMovieData_image">
                <img
                  src={`https://image.tmdb.org/t/p/original/${similar.poster_path}`}
                  alt=" "
                  width={"150px"}
                  height={"180px"}
                ></img>
              </div>
              <div className=" SimilarMoviesData_title">
                <b>{similar.title}</b>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default SimilarMoviesData;
