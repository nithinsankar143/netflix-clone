import { Link } from "react-router-dom";

const TVData = ({ data }) => {
  return (
    <div className="moviegrid_container">
      {data.map((movies) => {
        const { poster_path, title, release_date, id } = movies;
        return (
          <Link className="moviecard" to={`/movies/${id}`}>
            <div className="moviegrid_thumbnail">
              <img
                className="image"
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt=""
                width={"100%"}
                height={"70%"}
              ></img>
              <div className="divtitle">
                <b>{title}</b>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default TVData;
