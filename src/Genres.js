const Genres = ({ data }) => {
  return (
    <div>
      {data.genres.map((genre) => {
        const {
          genres: { id, name },
        } = genre;

        return <div>{name}</div>;
      })}
    </div>
  );
};
export default Genres;
