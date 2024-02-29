import React from "react";
import "./VideoPlayer.css";
import video from "../../assets/MANUU New Tarana.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  return (
    <div className={`VideoPlayer ${playState ? "" : "hide"}`}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
