import { Link } from "react-router-dom";

const TVDataSlice = ({ data }) => {
  return (
    <div className="moviegrid_container">
      {data.slice(0, 5).map((tvdata) => {
        const { poster_path, name, release_date, id } = tvdata;

        return (
          <Link
            className="moviecard"
            style={{ textDecoration: "none" }}
            to={`/movies/${id}`}
          >
            <div className="moviegrid_thumbnail">
              <img
                className="image"
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt=""
                width={"100%"}
                height={"70%"}
              ></img>
              <div className="divtitle">
                <b>{name}</b>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default TVDataSlice;
