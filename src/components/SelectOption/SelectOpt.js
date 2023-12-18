import React from "react";
const SelectOpt = () => {
  return (
    <>
      <select
        className="w-full h-full text-center bg-transparent text-white text-md"
        defaultValue={"en"}
      >
        <option value="en" className="bg-white text-black">
          English
        </option>
        <option value="hin" className="bg-white text-black">
          हिंदी
        </option>
        <option value="fr" className="bg-white text-black">
          French
        </option>
      </select>
    </>
  );
};

export default SelectOpt;
