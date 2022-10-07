import React from "react";
import DraftsIcon from "@mui/icons-material/Drafts";
import { NavLink } from "react-router-dom";
import "./Header.css";
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
            <NavLink
              id="rent"
              strict
              to="/"
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }

                document.getElementById("rent").classList.add("active");
              }}
            >
              Rent
            </NavLink>
            <NavLink
              id="buy"
              strict
              to="/buy"
              isActive={(match, location) => {
                if (!match) {
                  return false;
                }

                document.getElementById("buy").classList.add("active");
              }}
            >
              Buy
            </NavLink>
            <NavLink strict to="/sell">
              Sell
            </NavLink>
            <select name="" id="manage">
              <option value="Manage Property" hidden>
                Manage Property
              </option>
              <option value="Owned">Owned</option>
              <option value="BookMarked"></option>
              BookMarked
            </select>
            <select name="" id="resources">
              <option value="contact">Contact Us</option>
              <option value="FAQ">FAQ</option>
            </select>
          </div>
        </div>
        <div className="right">
          <button className="login">Login</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Header;
