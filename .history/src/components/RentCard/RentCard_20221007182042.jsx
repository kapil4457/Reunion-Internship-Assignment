import React from "react";
import "./RentCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
const RentCard = ({ data }) => {
  console.log(data);
  return (
    <div className="rent-card-main">
      <div className="main-image">
        <img src={`${data.image}`} alt="" />
      </div>
      <div className="rent-card-info">
        <div className="rent-card-price">
          <div>
            <span>{data.price}</span>/month
          </div>
          <FavoriteIcon />
        </div>
      </div>
    </div>
  );
};

export default RentCard;
