import React from "react";
import "./RentCard.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
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
            <span>${data.price}</span>/month
          </div>
          <FavoriteBorderIcon />
        </div>
        <div className="rent-card-name">{data.state}</div>
        <div className="rent-card-address">{data.address}</div>
        <div className="icons">
          <div className="beds">
            <SingleBedIcon />
            <span>{data.bedCount}</span>
          </div>
          <div className="bath">
            <BathtubOutlinedIcon />
            <span>{data.bathCount}</span>
          </div>
          <div className="area"></div>
        </div>
      </div>
    </div>
  );
};

export default RentCard;
