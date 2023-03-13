import React from "react";

const ArtistModal = ({ artists }) => {
  const renderArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img src={artist.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };
  return <div className="artist_image">{renderArtists()}</div>;
};

export default ArtistModal;
