import React from "react";
import favorite_song from "../../../images/favorite_song.png";
import music from "../../../images/music.png";
import enlarge from "../../../images/enlarge.png";

const LeftFunctions = () => {
  return (
    <div className="left_functions">
      <img src={favorite_song} alt="" />
      <img src={music} alt="" />
      <img src={enlarge} alt="" />
    </div>
  );
};

export default LeftFunctions;
