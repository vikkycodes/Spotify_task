import React from "react";
import speaker from "../../../images/speaker.png";

const RightFunctions = () => {
  return (
    <div className="right_functions">
      <img src={speaker} alt="" />
      <input type="range" />
      <img src={speaker} alt="" />
    </div>
  );
};

export default RightFunctions;
