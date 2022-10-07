import React, { useState } from "react";
import { home } from "../../home";
import RentCard from "../RentCard/RentCard";
import "./Rent.css";
const Rent = () => {
  const [location, setlocation] = useState("");
  const [rangeMin, setMinRange] = useState(0);
  const [rangeMax, setMaxRange] = useState(99999);
  const [type, setType] = useState("");
  const [date, setDate] = useState(new Date());
  const [typed, setTyped] = useState("");

  //date -> YY/MM/DD format
  const filtering = (val) => {
    var dateNow = new Date(val.moveIn);
    var date2 = new Date(date);

    if (
      (location === "" || location == val.state) &&
      (parseInt(rangeMax) > val.price || rangeMax == "") &&
      (parseInt(rangeMin) < val.price || rangeMin == "") &&
      date2 <= dateNow &&
      (typed === "" ||
        val.state.includes(typed) ||
        val.address.includes(typed)) &&
      (type == "" || val.type)
    ) {
      console.log(date2, dateNow);
      return true;
    }
  };
  return (
    <>
      <div className="rent-main">
        <div className="first">
          <div className="heading">Search Properties to rent</div>
          <input
            className="search-bar"
            placeholder="Type to Search"
            value={typed}
            onChange={(e) => {
              setTyped(e.target.value);
            }}
          />
        </div>
        <div className="second">
          <div>
            <span>Location</span>
            <select
              name=""
              id=""
              onChange={(e) => {
                setlocation(e.target.value);
              }}
            >
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
            <input
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div>
            <span>Price</span>
            <div>
              {/* <input
                type="range"
                name=""
                className="price-range"
                max={10000}
                min={500}
                onChange={(e) => {
                  setRange(e.target.value);
                }}
              />
              <span>{range}</span> */}
              <input
                type="number"
                placeholder="Minimum"
                value={rangeMin}
                onChange={(e) => {
                  setMinRange(e.target.value);
                }}
              />
              <input
                type="number"
                placeholder="Maximum"
                value={rangeMax}
                onChange={(e) => {
                  setMaxRange(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <span>Property Type</span>
            <select
              name=""
              id=""
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option value="" hidden>
                Select Type
              </option>
              <option value="">Villa</option>
              <option value="">Flats</option>
              <option value="">RowHouse</option>
            </select>
          </div>
        </div>
        <div className="rent-cards">
          {home.filter(filtering).map((item, idx) => (
            <RentCard data={item} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Rent;
