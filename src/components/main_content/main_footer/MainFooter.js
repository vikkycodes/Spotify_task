import React, { useContext } from "react";
import RightFunctions from "./RightFunctions";
import LeftFunctions from "./LeftFunctions";
import CenterFunctions from "./CenterFunctions";
import PlayFunction from "./PlayFunction";
import { AppContext } from "../../utils/appContext";

const MainFooter = () => {
  const {
    user: { currentTrack },
  } = useContext(AppContext);

  return (
    <div className="main_footer">
      <h2>
        {currentTrack
          ? currentTrack.name -
            currentTrack?.artists
              ?.slice(0, 3)
              .map((artist) => artist.name)
              .join(", ")
          : `No Song Playing`}
      </h2>
      <div className="main_footer_functions">
        <LeftFunctions />
        <CenterFunctions />
        <RightFunctions />
      </div>
      <PlayFunction />
    </div>
  );
};

export default MainFooter;
