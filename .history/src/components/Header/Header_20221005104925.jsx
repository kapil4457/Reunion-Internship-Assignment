import React from "react";
import DraftsIcon from "@mui/icons-material/Drafts";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="left">
          <div className="logo">
            <DraftsIcon />
            <span>Estatery</span>
          </div>
          <div className="categories">
            <NavLink to="/">Rent</NavLink>
            <NavLink to="/buy">Buy</NavLink>
            <NavLink to="/sell">Sell</NavLink>
            <select name="" id="">
              <option value="Manage Property" hidden>
                Manage Property
              </option>
              <option value="Owned">
                <NavLink to="/properties/owned">Owned</NavLink>
              </option>
            </select>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default Header;
