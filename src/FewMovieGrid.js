const FewMovieGrid = ({ data }) => {
  return (
    <div className="container">
      {data.slice(0, 4).map((movies) => {
        const { poster_path, id, title, release_date } = movies;
        return (
          <div className="moviecard">
            <div className="thumbnail">
              <img
                className="image"
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt=""
                width={"100%"}
                height={"70%"}
              ></img>

              <div className="divid">{id}</div>
              <div className="divtitle">
                <b>{title}</b>
              </div>
              <div className="divid">{release_date}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FewMovieGrid;
