import { Link } from "react-router-dom";

const FewMovieGrid = ({ data }) => {
  return (
    <div className="container">
      {data.slice(0, 5).map((movies) => {
        const { poster_path, title, release_date, id } = movies;
        return (
          <Link className="moviecard" to={`/movies/${id}`}>
            <div className="thumbnail">
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
export default FewMovieGrid;
