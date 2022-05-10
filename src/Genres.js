const Genres = ({ data }) => {
  return (
    <div>
      {data.genres.map((genre) => {
        return <div>{genre.name}</div>;
      })}
    </div>
  );
};
export default Genres;
