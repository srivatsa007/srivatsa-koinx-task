import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from "./Components/navbar/Navbar";
import GraphSection from "./Components/Graphcard/GraphSection";
import CtaCard from "./Components/CTA/CtaCard";
import TrendingCard from "./Components/Trending/TrendingCard";
import Performance from "./Components/Performance/Performance";
import AboutCard from "./Components/about/AboutCard";
import Sentiment from "./Components/Sentiment/Sentiment";
import Tokenomics from "./Components/Tokenomics/Tokenomics";
import Team from "./Components/Teams/Team";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row flex-1">
        <div className="md:w-2/3">
          <GraphSection />
          <Performance />
          <Sentiment />
          <AboutCard />
          <Tokenomics />
          <Team />
        </div>
        <div className="md:w-1/3">
          <CtaCard />
          <TrendingCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
