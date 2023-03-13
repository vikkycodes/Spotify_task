import React from "react";

const ArtistModal = ({ artists }) => {
  return (
    <div className="artist_image" id="artist_modal">
      {artists.map((artist) => (
        <div key={artist.id} className={"artist_card_wrapper"}>
          {artist.images.length ? (
            <img src={artist.images[0].url} alt="" />
          ) : (
            <div>No Image</div>
          )}
          <div>
            <p>{artist.name}</p>
            <div className="artist_tag_wrapper">
              {artist.genres.slice(0, 2).map((genre) => (
                <span className="artist_tag">{genre}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtistModal;
