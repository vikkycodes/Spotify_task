import React, { useContext, useEffect, useState } from "react";
import nextIcon from "../../../images/next.png";
import previousIcon from "../../../images/previous.png";
import playIcon from "../../../images/playIcon.png";
import PauseIcon from "../../../images/pause.png";
import { AppContext } from "../../utils/appContext";

const CenterFunctions = () => {
  const { user, setUser } = useContext(AppContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const { spotifyInstance } = user;

  useEffect(() => {
    if (spotifyInstance) {
      spotifyInstance.getMyCurrentPlaybackState().then((r) => {
        setIsPlaying(r.isPlaying);
        setUser({ ...user, currentTrack: r.item });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spotifyInstance]);

  const handlePlayPause = () => {
    if (isPlaying) {
      spotifyInstance.pause();
      setIsPlaying(false);
    } else {
      spotifyInstance.play();
      setIsPlaying(true);
    }
  };

  const skipNext = () => {
    spotifyInstance.skipToNext();
    spotifyInstance.getMyCurrentPlayingTrack().then((r) => {
      setIsPlaying(r.isPlaying);
      setUser({ ...user, currentTrack: r.item });
    });
  };

  const skipPrevious = () => {
    spotifyInstance.skipToPrevious();
    spotifyInstance.getMyCurrentPlayingTrack().then((r) => {
      setIsPlaying(r.isPlaying);
      setUser({ ...user, currentTrack: r.item });
    });
  };

  return (
    <div className="center_functions">
      <img
        src={previousIcon}
        onClick={skipNext}
        className="player_action"
        alt=""
      />
      {isPlaying ? (
        <img
          src={PauseIcon}
          onClick={handlePlayPause}
          fontSize="large"
          className="player_action"
          alt=""
        />
      ) : (
        <img
          src={playIcon}
          onClick={handlePlayPause}
          fontSize="large"
          className="player_action"
          alt=""
        />
      )}
      <img
        src={nextIcon}
        onClick={skipPrevious}
        className="player_action"
        alt=""
      />
    </div>
  );
};

export default CenterFunctions;
