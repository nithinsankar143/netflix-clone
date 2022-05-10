const MovieDetails = ({ data }) => {
  return (
    <div className="MovieDetails">
      <div>
        <img
          className="imagestyle"
          src={`https://image.tmdb.org/t/p/w300/${data.backdrop_path}`}
          alt=" "
          height={"100%"}
          width={"100%"}
        ></img>
      </div>
      <div>
        <div>{data.id}</div>
        <div>{data.original_title}</div>
        <div>{data.original_language}</div>
        <div>{data.overview}</div>
        <div>{data.popularity}</div>
        <div>{data.release_date}</div>
      </div>
    </div>
  );
};
export default MovieDetails;
