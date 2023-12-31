import React from "react";

const Iframe = ({ resKey }) => {
  return (
    <>
      <iframe
        className="w-full aspect-video rounded-lg -mt-4"
        src={`https://www.youtube.com/embed/${resKey}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Iframe;
