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
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="my-4 mx-8">
        <div className="text-sm font-medium max-w-4xl  flex-start mx-2">
          <span className="text-gray-600 font-normal">Cryptocurrencies</span>
          <span className="mx-1 text-gray-400">{`>>`}</span>
          <span className="text-black font-semibold">Bitcoin</span>
        </div>
        <div
          className="flex flex-col md:flex-row md:justify-between my-8 "
          // md:gap-4"
        >
          <div className=" md:w-fit mx-2">
            <GraphSection />
            <Performance />
            <Sentiment />
            <AboutCard />
            <Tokenomics />
            <Team />
          </div>
          <div className=" md:w-fit flex flex-col items-center ">
            <CtaCard />
            <TrendingCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
