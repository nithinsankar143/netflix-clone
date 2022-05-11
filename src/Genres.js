const Genres = ({ data }) => {
  return (
    <div className="genres">
      {data.genres?.length > 0 &&
        data.genres.map((genre) => {
          return <div>{genre.name}</div>;
        })}
    </div>
  );
};
export default Genres;
