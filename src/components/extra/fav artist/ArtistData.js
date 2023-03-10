import React from "react";
import "../../css/styles.css";
import tailor_swift from "../../../images/tailor_swift.jpg";
import kanye_west from "../../../images/kanye_west.jpg";
import drake from "../../../images/drake.jpg";
import billie_eilish from "../../../images/billie_eilish.jpg";
import more from "../../../images/more.png";

const ArtistData = () => {
  return (
    <div className="artist_data">
      <div className="card">
        <img src={tailor_swift} alt="" />
        <div className="sub_card">
          <h3>Taylor Swift</h3>
          <p>196 songs in library</p>
        </div>
        <img className="more_icon" src={more} alt="" />
      </div>
      <div className="card">
        <img src={kanye_west} alt="" />
        <div className="sub_card">
          <h3>Kanye West</h3>
          <p>124 songs in library</p>
        </div>
        <img className="more_icon" src={more} alt="" />
      </div>
      <div className="card">
        <img src={drake} alt="" />
        <div className="sub_card">
          <h3>Drake</h3>
          <p>50 songs in library</p>
        </div>
        <img className="more_icon" src={more} alt="" />
      </div>
      <div className="card">
        <img src={billie_eilish} alt="" />
        <div className="sub_card">
          <h3>Billie Eilsh</h3>
          <p>15 songs in library</p>
        </div>
        <img className="more_icon" src={more} alt="" />
      </div>
    </div>
  );
};

export default ArtistData;
