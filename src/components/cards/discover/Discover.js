import React from "react";
import new_and_noteable from "../../../images/new_and_noteable.png";
import calendar from "../../../images/calendar.png";
import event from "../../../images/event.png";

const Discover = () => {
  return (
    <div className="box">
      <p>Discover</p>
      <h4>
        {" "}
        <img src={new_and_noteable} alt="" /> New and Notable
      </h4>
      <h4>
        {" "}
        <img src={calendar} alt="" /> Release Calender
      </h4>
      <h4>
        {" "}
        <img src={event} alt="" /> Events
      </h4>
    </div>
  );
};

export default Discover;
