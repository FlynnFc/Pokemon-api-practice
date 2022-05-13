import React from "react";

const imgSource =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const section = document.querySelector("#container");

const PokemonContainer = (props) => {
  const numberOfPokemon = props.totalPokemon;
  let total = [];
  for (let i = 1; i < numberOfPokemon; i++) {
    if (i > 898) {
      break;
    } else {
      total.push(
        <div key={i}>
          <img src={imgSource + i + ".png"}></img>
          <span className="text-3xl">{i}</span>
        </div>
      );
    }
  }
  return total;
};

export default PokemonContainer;
