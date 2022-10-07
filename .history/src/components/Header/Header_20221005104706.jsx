import React from "react";
import DraftsIcon from "@mui/icons-material/Drafts";

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
            <NavLink to="rentals">Rent</NavLink>
            <NavLink to="rentals">Buy</NavLink>
            <NavLink to="rentals">Sell</NavLink>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default Header;
