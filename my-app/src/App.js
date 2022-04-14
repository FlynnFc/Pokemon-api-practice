import React, { useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Selector from "./components/Selector";

function App() {
  return (
    <div className="font-bold text-5xl text-white text-center">
      <Banner></Banner>
      <Selector></Selector>
    </div>
  );
}

export default App;
