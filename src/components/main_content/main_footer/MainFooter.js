import React from "react";
import RightFunctions from "./RightFunctions";
import LeftFunctions from "./LeftFunctions";
import CenterFunctions from "./CenterFunctions";

const MainFooter = () => {
  return (
    <div className="main_footer">
      <div className="main_footer_functions">
        <LeftFunctions />
        <CenterFunctions />
        <RightFunctions />
      </div>
    </div>
  );
};

export default MainFooter;
