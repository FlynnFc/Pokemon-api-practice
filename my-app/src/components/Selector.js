import React from "react";

const Selector = (props) => {
  return (
    <>
      <input
        type="number"
        id="numberSelector"
        min="1"
        max="998"
        className="border-solid border-white text-xl"
      ></input>
    </>
  );
};

export default Selector;
