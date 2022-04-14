import React, { useState, useEffect } from "react";

const Selector = () => {
  const [total, setTotal] = useState(500);
  const imgSource =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  return (
    <>
      <input
        onInput={(e) => setTotal(e.target.value)}
        type="number"
        id="numberSelector"
        min="1"
        defaultValue="500"
        max="998"
        className="border-solid border-white text-xl"
      ></input>
      <div id="container">
        <img
          alt="img of a pokemon"
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          }
        ></img>
        <span className="text-2xl">#1</span>
      </div>
    </>
  );
};

export default Selector;
