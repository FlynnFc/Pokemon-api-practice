const imgSoruce =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const section = document.querySelector("#container");

const Pokemon = (props) => {
  console.log(props.total);
  const goPokemon = (max) => {
    // for (let i = 1; i < { max }; i++) {
    //   const img = document.createElement("img");
    //   const pokemon = document.createElement("div");
    //   const number = document.createElement("span");
    //   number.innerText = i;
    //   img.src = imgSource + i + ".png";
    //   console.log(img.src);
    //   section.appendChild(pokemon);
    //   pokemon.appendChild(number);
    //   pokemon.appendChild(img);
    // }
  };

  return (
    <div id="container">
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
