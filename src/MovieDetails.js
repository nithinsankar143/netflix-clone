import FewActor from "./FewActor";
import Genres from "./Genres";

const MovieDetails = ({ data }) => {
  const hrs = Math.floor(data.runtime / 60);
  const min = data.runtime % 60;
  return (
    <div>
      <img
        className="moviedetails_bgimage"
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt=" "
      />
      <div className="MovieDetails">
        <div className="moviedetails_image">
          <img
            src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
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
          <div>
            Time : {hrs}Hrs {min}Min
          </div>
          <div>Language : {data.original_language}</div>
          <div style={{ display: "flex" }}>
            Genres : <Genres data={data} />
          </div>
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
          <div>Budget : {data.budget}</div>

          <div className="MovieDetails_FewActor">
            <FewActor />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
