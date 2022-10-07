import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/rent");
  });
  return <></>;
};

export default Home;
