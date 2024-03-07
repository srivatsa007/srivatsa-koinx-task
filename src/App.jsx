import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import GraphSection from "./Components/Graphcard/GraphSection";
import CtaCard from "./Components/CTA/CtaCard";
import TrendingCard from "./Components/Trending/TrendingCard";
import Performance from "./Components/Performance/Performance";
import AboutCard from "./Components/about/AboutCard";
import Sentiment from "./Components/Sentiment/Sentiment";
import Tokenomics from "./Components/Tokenomics/Tokenomics";
import Team from "./Components/Teams/Team";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar />
      <GraphSection />
      <CtaCard />
      <TrendingCard />
      <Performance />
      <Sentiment />
      <AboutCard />
      <Tokenomics />
      <Team />
    </div>
  );
}

export default App;
