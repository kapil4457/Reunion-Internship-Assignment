import React from "react";
import { home } from "../../home";
import RentCard from "../RentCard/RentCard";

const Rent = () => {
  return (
    <>
      <div className="rent-main">
        <div className="first">
          <div className="heading">Search Properties to rent</div>
          <input className="search-bar"></input>
        </div>
        {home.map((item, idx) => (
          <RentCard data={item} key={idx} />
        ))}
      </div>
    </>
  );
};

export default Rent;
