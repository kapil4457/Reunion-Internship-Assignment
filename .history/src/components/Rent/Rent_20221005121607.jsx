import React from "react";
import { home } from "../../home";
import RentCard from "../RentCard/RentCard";

const Rent = () => {
  return (
    <>
      <div className="rent-main">
        {home.map((item, idx) => (
          <RentCard />
        ))}
      </div>
    </>
  );
};

export default Rent;
