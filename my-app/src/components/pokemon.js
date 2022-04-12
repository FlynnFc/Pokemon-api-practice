import React from "react";

// const imgSoruce =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokemon = (props) => {
  //   for (let i = 1; i < 31; i++) {
  //     let finalLink = imgSoruce + i + ".png";
  //     let image = document.createElement("img");
  //     image.src = finalLink;
  //     console.log(finalLink);
  //   }
  return (
    <div>
      <img
        alt="img of a pokemon"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      ></img>
    </div>
  );
};

export default Pokemon;
