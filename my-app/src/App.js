import "./App.css";
import Banner from "./components/Banner";
import Pokemon from "./components/Pokemon";
import Selector from "./components/Selector";

function App() {
  const totalGetter = (inputVal) => {
    let inputFromForm = inputVal;
  };

  return (
    <div className="font-bold text-5xl text-white text-center">
      <Banner></Banner>
      <Selector totalGetter={totalGetter}></Selector>
      <Pokemon inputVal={inputVal}></Pokemon>
    </div>
  );
}

export default App;
