const TVSeasonsData = ({ data }) => {
  return (
    <div>
      {data.map((season) => {
        return (
          <div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300/${season.profile_path}`}
                alt=" "
                width={"200px"}
                height={"250px"}
              ></img>
            </div>
            <div>{season.name}</div>
          </div>
        );
      })}
    </div>
  );
};
export default TVSeasonsData;
