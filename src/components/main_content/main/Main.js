import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../utils/appContext";

const Main = () => {
  const [playlist, setPlaylist] = useState();

  const {
    user: { spotifyInstance },
  } = useContext(AppContext);

  useEffect(() => {
    if (spotifyInstance) {
      spotifyInstance.getUserPlaylists().then((playlists) => {
        playlists.items.length > 0 &&
          spotifyInstance
            .getPlaylist(playlists.items[0]?.uri?.split(":")[2])
            .then((response) => setPlaylist(response));
      });
    }
  }, [spotifyInstance]);

  const playSong = (id) => {
    spotifyInstance
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then(
        (res) => {
          console.log({ res });
        },
        (error) => {
          alert("Premium account required");
        }
      );
  };

  return (
    <main className="main_wrapper">
      <div className="main_content">
        <h1>My Playlist</h1>
        <p>Show All</p>
      </div>
      <div className="playlist_header">
        <p>#</p>
        <p className="track_name">TITLE</p>
        <p className="artist">ARTIST</p>
        <p className="track_time">TIME</p>
        <p className="album">ALBUM</p>
      </div>

      {!playlist && <h2 className="no_content">You have no playlist</h2>}

      {playlist?.tracks?.items.map((item, idx) => (
        <div
          className="playlist_wrapper"
          key={item.track.id}
          onClick={() => playSong(item.track.id)}
        >
          <p className="sn">{idx + 1}</p>
          <p className="track_name">{item.track.name}</p>
          <p className="artist">{item.track.artists[0].name}</p>
          <p className="track_time">{item.track.duration_ms}</p>
          <p className="album">{item.track.album.name}</p>
        </div>
      ))}
    </main>
  );
};

export default Main;
