import React from "react";
import fire from "../../../images/fire.png";
import more_than from "../../../images/more_than.png";
import "../../../components/css/styles.css";

const Header = () => {
  return (
    <header>
      <h4>
        What's hot
        <img src={fire} alt="" />
      </h4>
      <h1>Trending</h1>
      <p>
        More <img src={more_than} alt="" />
      </p>
    </header>
  );
};

export default Header;
