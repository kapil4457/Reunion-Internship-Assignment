import React from "react";
import { home } from "../../home";
import RentCard from "../RentCard/RentCard";
import "./Rent.css";
const Rent = () => {
  return (
    <>
      <div className="rent-main">
        <div className="first">
          <div className="heading">Search Properties to rent</div>
          <input className="search-bar" placeholder="Type to Search" />
        </div>
        <div className="second">
          <div>
            <span>Location</span>
            <select name="" id="">
              <option value="" hidden>
                Select Location
              </option>
              <option value="Bathinda">Bathinda</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Lonavala">Lonavala</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Pune">Pune</option>
              <option value="Shimla">Shimla</option>
              <option value="Kochi">Kochi</option>
              <option value="Banaras">Banaras</option>
              <option value="Banglore">Banglore</option>
              <option value="Aurangabad">Aurangabad</option>
            </select>
          </div>
          <div>
            <span>When</span>
            <input type="date" />
          </div>
          <div>
            <span>Price</span>
            <select name="" id="">
              <option value="">Select Range</option>
              <option id="">$1000-$1500</option>
              <option id="">$1500-$2000</option>
              <option id="">$2000-$2500</option>
              <option id="">$2500-Above</option>
            </select>
          </div>
          <div>
            <select name="" id="">
              <option value="">Villa</option>
              <option value="">Flats</option>
            </select>
          </div>

          <button>Search</button>
        </div>
        {home.map((item, idx) => (
          <RentCard data={item} key={idx} />
        ))}
      </div>
    </>
  );
};

export default Rent;
