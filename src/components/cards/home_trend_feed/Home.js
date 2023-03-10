import React from "react";
import home from "../../../images/home.png";
import trend from "../../../images/trend.png";
import feed from "../../../images/feed.png";
import "../../../components/css/styles.css";

const Home = () => {
  return (
    <div className="box">
      <h4>
        {" "}
        <img src={home} alt="" />
        Home
      </h4>
      <h4>
        {" "}
        <img src={trend} alt="" />
        Trends
      </h4>
      <h4>
        {" "}
        <img src={feed} alt="" />
        Feed
      </h4>
    </div>
  );
};
export default Home;
