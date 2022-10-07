import React from "react";
import "./RentCard.css";
const RentCard = ({ data }) => {
  console.log(data);
  return (
    <div className="rent-card-main">
      <div className="main-image">
        <img src={`${data.image}`} alt="" />
      </div>
    </div>
  );
};

export default RentCard;
