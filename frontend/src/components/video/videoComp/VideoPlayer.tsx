import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = (): JSX.Element => {
  return (
    <div>
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </div>
  );
};

export default VideoPlayer;
