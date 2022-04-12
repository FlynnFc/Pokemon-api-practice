import "./App.css";
import Banner from "./components/Banner";
import Pokemon from "./components/Pokemon";
import Selector from "./components/Selector";

function App() {
  return (
    <div className="font-bold text-5xl text-white text-center">
      <Banner></Banner>
      <Selector></Selector>
      <Pokemon></Pokemon>
    </div>
  );
}

export default App;
