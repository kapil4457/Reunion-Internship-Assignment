import React from "react";
import "./Home.css";
import DraftsIcon from "@mui/icons-material/Drafts";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="header">
        <div className="left">
          <div className="logo">
            <DraftsIcon />
            <span>Estatery</span>
          </div>
          <div className="categories">NavLink</div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default Home;
