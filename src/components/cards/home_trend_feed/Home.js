import React from "react";
import home from "../../../images/home.png";
import trend from "../../../images/trend.png";
import feed from "../../../images/feed.png";
import "../../../components/css/styles.css";

const Home = () => {
  return (
    <div className="box">
      <h4>
        <img src={home} alt="" className="sidebar_icon" />
        Home
      </h4>
      <h4>
        <img src={trend} alt="" className="sidebar_icon" />
        Trends
      </h4>
      <h4>
        <img src={feed} alt="" className="sidebar_icon" />
        Feed
      </h4>
    </div>
  );
};
export default Home;
