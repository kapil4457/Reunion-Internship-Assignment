import React, { useState } from "react";
import "./RentCard.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import Crop54Icon from "@mui/icons-material/Crop54";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
const RentCard = ({ data }) => {
  const [color, setColor] = useState("rgb(176,171,202)");
  const changeColor = () => {
    if (color == "rgb(176,171,202)") {
      setColor("red");
    } else {
      setColor("rgb(176,171,202)");
    }
  };
  return (
    <div className="rent-card-main">
      <div className="purple-tag">
        <div className="straight">
          <AutoAwesomeIcon />
        </div>
        <div className="slant"></div>
      </div>
      <div className="main-image">
        <img src={`${data.image}`} alt="" />
      </div>
      <div className="rent-card-info">
        <div className="rent-card-price">
          <div>
            <span>${data.price}</span>/month
          </div>
          <FavoriteBorderIcon
            style={{ color: `${color}` }}
            onClick={changeColor}
          />
        </div>
        <div className="rent-card-name">{data.state}</div>
        <div className="rent-card-address">{data.address}</div>
        <div className="icons">
          <div className="beds">
            <SingleBedIcon />
            <span>{data.bedCount}Beds</span>
          </div>
          <div className="bath">
            <BathtubOutlinedIcon />
            <span>{data.bathCount}Bathrooms</span>
          </div>
          <div className="area">
            <Crop54Icon />
            <span>
              {data.area}m<sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCard;
