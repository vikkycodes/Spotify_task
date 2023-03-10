import React from "react";
import loop from "../../../images/loop.png";
import rewind from "../../../images/rewind.png";
import pause from "../../../images/pause.png";
import fast_forward from "../../../images/fast_forward.png";
import shuffle from "../../../images/shuffle.png";

const CenterFunctions = () => {
  return (
    <div className="center_functions">
      <img src={loop} alt="" />
      <img src={rewind} alt="" />
      <img id="pause" src={pause} alt="" />
      <img src={fast_forward} alt="" />
      <img src={shuffle} alt="" />
    </div>
  );
};

export default CenterFunctions;
