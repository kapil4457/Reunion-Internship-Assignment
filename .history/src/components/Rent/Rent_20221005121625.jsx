import React from "react";
import { home } from "../../home";
import RentCard from "../RentCard/RentCard";

const Rent = () => {
  return (
    <>
      <div className="rent-main">
        {home.map((item, idx) => (
          <RentCard data={item} key={idx} />
        ))}
      </div>
    </>
  );
};

export default Rent;
