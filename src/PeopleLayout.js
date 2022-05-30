import React from "react";
import PeoplePopular from "./PeoplePopular";
import { Link } from "react-router-dom";
const PeopleLayout = () => {
  return (
    <nav className="container_layout">
      <div className="home popular">
        <h2>
          <Link
            className="link_layout"
            style={{ textDecoration: "none" }}
            to="/PeoplePopular"
          >
            POPULAR
          </Link>
        </h2>
        <div>
          <PeoplePopular />
        </div>
      </div>
    </nav>
  );
};
export default PeopleLayout;
