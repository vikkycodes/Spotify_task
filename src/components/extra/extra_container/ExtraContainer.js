import React from "react";
import "../../css/styles.css";
import Shortcuts from "../shortcut/Shortcuts";
import FavArtist from "../fav artist/FavArtist";
import ExtraFooter from "../footer/ExtraFooter";

const ExtraContainer = () => {
  return (
    <div className="extra">
      <Shortcuts />
      <FavArtist />
      <ExtraFooter />
    </div>
  );
};

export default ExtraContainer;
