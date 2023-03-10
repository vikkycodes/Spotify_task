import React from "react";
import Home from "../cards/home_trend_feed/Home";
import Logo from "../../images/Logo.png";
import Discover from "../cards/discover/Discover";
import Collection from "../cards/collection/Collection";
import Footer from "../cards/footer/Footer";

const SideBar = () => {
  return (
    <div className="sidebar">
      <img className="logo" src={Logo} alt="" />
      <Home />
      <Discover />
      <Collection />
      <Footer />
    </div>
  );
};

export default SideBar;
