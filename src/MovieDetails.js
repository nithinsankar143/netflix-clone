const MovieDetails = ({ data }) => {
  return (
    <div className="MovieDetails">
      <div>{data.id}</div>
      <div>{data.original_title}</div>
    </div>
  );
};
export default MovieDetails;
