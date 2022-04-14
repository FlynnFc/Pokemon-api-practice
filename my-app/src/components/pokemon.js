import React, { useEffect } from "react";

const imgSource =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const section = document.querySelector("#container");

const Pokemon = (props) => {
  useEffect(() => {
    // for (let i = 1; i < props.total; i++) {
    //   const img = React.createElement("img");
    //   const pokemon = React.createElement("div");
    //   const number = React.createElement("span");
    //   number.innerText = i;
    //   img.src = imgSource + i + ".png";
    //   console.log(img.src);
    //   section.appendChild(pokemon);
    //   pokemon.appendChild(number);
    //   pokemon.appendChild(img);
    // }
    console.log(props.total);
  }, [props]);

  console.log(props.total);

  return (
    <div id="container" className={props.total}>
      <img
        alt="img of a pokemon"
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        }
      ></img>
      <span className="text-2xl">#1</span>
    </div>
  );
};

export default Pokemon;
