import React from "react";
const ActorDetails = ({ data }) => {
  let genders = data.gender === 1 ? "female" : "male";
  return (
    <div className="ActorDetail_container">
      <div className="ActorDetail_image">
        <img
          src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}
          alt=" "
          width={"300px"}
          height={"400px"}
        ></img>
      </div>

      <div className="ActorDetails_Details">
        <div>
          <b>Name : </b>
          {data.name}
        </div>
        <div>
          <b>Gender : </b>
          {genders}
        </div>
        <div>
          <b>Birthday : </b>
          {data.birthday}
        </div>
        <div>
          <b>Department : </b>
          {data.known_for_department}
        </div>
        <div>
          <b>place_of_birth : </b>
          {data.place_of_birth}
        </div>
        <div>
          <b>popularity : </b>
          {data.popularity}
        </div>
        <b>BIOGRAPHY : </b>
        <div>{data.biography}</div>
      </div>
    </div>
  );
};
export default ActorDetails;
