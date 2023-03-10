import React from "react";
import albums from "../../../images/albums.png";

const Shortcuts = () => {
  return (
    <div className="shortcuts">
      <h2>Shortcuts</h2>

      <div className="shortcut_card">
        <div className="chill_card">
          <img src={albums} alt="" />
          <h4>Chill Hits</h4>
        </div>
        <div className="hop_card">
          <img src={albums} alt="" />
          <h4>Hop</h4>
        </div>
      </div>

      <div className="shortcut_card">
        <div className="accoustic_card">
          <img src={albums} alt="" />
          <h4>Accoustic</h4>
        </div>
        <div className="india_card">
          <img src={albums} alt="" />
          <h4>India Pop</h4>
        </div>
      </div>

      <div className="shortcut_card">
        <div className="piano_card">
          <img src={albums} alt="" />
          <h4>Piano Blues</h4>
        </div>
        <div className="jazz_card">
          <img src={albums} alt="" />
          <h4>Jazz</h4>
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;
