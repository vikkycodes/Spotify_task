import React from "react";
import ArtistData from "./ArtistData";
import "../../css/styles.css";

const FavArtist = () => {
  return (
    <div className="fav_artist_card">
      <h2>Fav Artist</h2>
      <ArtistData />
    </div>
  );
};

export default FavArtist;
