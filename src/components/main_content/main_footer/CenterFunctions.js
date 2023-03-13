import React, { useContext, useEffect, useState } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import { AppContext } from "../../../utils/appContext";

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
      <SkipPreviousIcon onClick={skipNext} className="player_action" />
      {isPlaying ? (
        <PauseCircleOutlineIcon
          onClick={handlePlayPause}
          fontSize="large"
          className="player_action"
        />
      ) : (
        <PlayCircleOutlineIcon
          onClick={handlePlayPause}
          fontSize="large"
          className="player_action"
        />
      )}
      <SkipNextIcon onClick={skipPrevious} className="player_action" />
    </div>
  );
};

export default CenterFunctions;
