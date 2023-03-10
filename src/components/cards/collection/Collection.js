import React from "react";
import favorite_song from "../../../images/favorite_song.png";
import artist from "../../../images/artist.png";
import albums from "../../../images/albums.png";

const Collection = () => {
  return (
    <div className="box">
      <p>New Colloection</p>
      <h4>
        {" "}
        <img src={favorite_song} alt="" /> Favorite Songs
      </h4>
      <h4>
        {" "}
        <img src={artist} alt="" /> Artist
      </h4>
      <h4>
        {" "}
        <img src={albums} alt="" /> Albums
      </h4>
    </div>
  );
};

export default Collection;
