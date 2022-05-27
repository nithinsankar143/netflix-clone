import { Link } from "react-router-dom";

const TVData = ({ data }) => {
  return (
    <div className="moviegrid_container">
      {data.map((tvdata) => {
        return (
          <Link
            className="moviecard"
            style={{ textDecoration: "none" }}
            to={`/movies/${tvdata.id}`}
          >
            <div className="moviegrid_thumbnail">
              <img
                className="image"
                src={`https://image.tmdb.org/t/p/w300/${tvdata.poster_path}`}
                alt=""
                width={"100%"}
                height={"70%"}
              ></img>
              <div className="divtitle">
                <b>{tvdata.name}</b>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default TVData;
