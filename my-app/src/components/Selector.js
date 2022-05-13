import React, { useState } from "react";
import PokemonContainer from "./PokemonContainer";

const Selector = () => {
  const [total, setTotal] = useState(100);
  const adjustedTotal = parseInt(total) + 1;

  return (
    <>
      <input
        onInput={(e) => setTotal(e.target.value)}
        type="number"
        id="numberSelector"
        min="1"
        defaultValue="100"
        max="998"
        className="border-solid border-white text-xl"
      ></input>
      <div className="flex flex-wrap ease-in duration-300">
        <PokemonContainer totalPokemon={adjustedTotal}></PokemonContainer>
      </div>
    </>
  );
};

export default Selector;
