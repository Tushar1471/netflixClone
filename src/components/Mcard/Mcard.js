import React from "react";

const Mcard = ({ image }) => {
  return (
    <>
      <div>
        <img
          className="w-full h-full transition rounded-sm"
          src={`https://image.tmdb.org/t/p/w300/${image}`}
          alt="Random"
        />
      </div>
    </>
  );
};

export default Mcard;
