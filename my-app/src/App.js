import "./App.css";
import Banner from "./components/Banner";
import Pokemon from "./components/Pokemon";
import Selector from "./components/Selector";

function App() {
  let numberOfPokemon = 20;

  const totalGotten = (inputVal) => {
    numberOfPokemon = inputVal;
    console.log(numberOfPokemon);
  };

  return (
    <div className="font-bold text-5xl text-white text-center">
      <Banner></Banner>
      <Selector totalGetter={totalGotten}></Selector>
      <Pokemon total={numberOfPokemon}></Pokemon>
    </div>
  );
}

export default App;
