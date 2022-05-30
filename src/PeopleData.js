import { Link } from "react-router-dom";

const PeopleData = ({ data }) => {
  return (
    <div className="moviegrid_container">
      {data?.length > 0 &&
        data.map((people) => {
          return (
            <Link
              className="moviecard"
              style={{ textDecoration: "none" }}
              to={`/tv/${people.id}`}
            >
              <div className="moviegrid_thumbnail">
                <img
                  className="image"
                  src={`https://image.tmdb.org/t/p/w300/${people.profile_path}`}
                  alt=""
                  width={"100%"}
                  height={"70%"}
                ></img>
                <div className="divtitle">
                  <b>{people.name}</b>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};
export default PeopleData;
