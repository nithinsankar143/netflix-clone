import Genres from "./Genres";

const MovieDetails = ({ data }) => {
  return (
    <div className="MovieDetails">
      <div className="imagestyle">
        <img
          src={`https://image.tmdb.org/t/p/w300/${data.backdrop_path}`}
          alt=" "
          height={"100%"}
          width={"90%"}
        ></img>
      </div>
      <div className="content">
        <div className="title">
          <div className="original_title">
            <b>{data.original_title}</b>
          </div>
          <div className="release_date">({data.release_date})</div>
        </div>
        <div>{data.original_language}</div>
        <div className="types">
          <div>User Score</div>
          <div>Edit</div>
          <div>favorite</div>
          <div>Watchlist</div>
          <div>Rate</div>
          <div>Trailor</div>
        </div>
        <b className="overview">OVERVIEW:-</b>
        <div>
          <b>{data.overview}</b>
        </div>
        <div>{Genres}</div>
      </div>
    </div>
  );
};
export default MovieDetails;
