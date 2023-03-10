import React from "react";
import "../../css/styles.css";
import extra from "../../../images/extra.jpg";
import plus from "../../../images/plus.png";

const ExtraFooter = () => {
  return (
    <div className="extrafooter">
      <img src={extra} alt="" />
      <h3>Authoritarian</h3>
      <p>Abdulai Victor</p>
      <div className="plus">
        <img src={plus} alt="" />
      </div>
    </div>
  );
};

export default ExtraFooter;
