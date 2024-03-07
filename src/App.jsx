import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import GraphSection from "./Components/Graphcard/GraphSection";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar />
      <GraphSection />
    </div>
  );
}

export default App;
