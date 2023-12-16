import React from "react";

const VideoTitle = ({ data }) => {
  return (
    <>
      <div>
        <iframe
          className="w-full aspect-video"
          src={"https://www.youtube.com/embed/" + data + "?&autoplay=1&mute=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <h1>{data}</h1>
      </div>
    </>
  );
};

export default VideoTitle;
