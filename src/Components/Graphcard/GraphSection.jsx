// import { FaBitcoin } from "react-icons/fa6";
// import TradingViewWidget from "./TradingViewWidget";

// const GraphSection = () => {
//   return (
//     <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md w-full h-fit">
//       <div className="flex items-center space-x-3">
//         <FaBitcoin className="h-8 w-8 text-orange-500" />
//         <h1 className="text-3xl font-bold">Bitcoin</h1>
//         <span className="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
//           BTC
//         </span>
//         <span className="px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
//           Rank #1
//         </span>
//       </div>
//       <div className="mt-4">
//         <div className="flex items-baseline space-x-2">
//           <span className="text-4xl font-bold">$46,953.04</span>
//           <span className="text-sm font-semibold text-green-600">
//             ▲ 2.51% (24H)
//           </span>
//         </div>
//         <div className="text-lg text-gray-600">₹39,42,343</div>
//       </div>
//       <div className="my-6 h-[450px]">
//         <h2 className="text-xl font-semibold">Bitcoin Price Chart (USD)</h2>
//         {/* <div className="mt-4 flex space-x-3">
//           <button className="text-xs" variant="ghost">
//             1H
//           </button>
//           <button className="text-xs" variant="ghost">
//             24H
//           </button>
//           <button className="text-xs" variant="ghost">
//             7D
//           </button>
//           <button className="text-xs" variant="ghost">
//             1M
//           </button>
//           <button className="text-xs" variant="ghost">
//             3M
//           </button>
//           <button className="text-xs" variant="ghost">
//             6M
//           </button>
//           <button className="text-xs" variant="ghost">
//             1Y
//           </button>
//           <button className="text-xs" variant="ghost">
//             ALL
//           </button>
//         </div> */}
//         <TradingViewWidget />
//       </div>
//     </div>
//   );
// };

// export default GraphSection;

import { useState, useEffect } from "react";
import { FaBitcoin } from "react-icons/fa6";
import TradingViewWidget from "./TradingViewWidget";

const GraphSection = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
        );
        const data = await response.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCurrencyToggle = () => {
    setCurrency(currency === "USD" ? "INR" : "USD");
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md w-full h-fit">
      {bitcoinData && (
        <>
          <div className="flex items-center space-x-3">
            <FaBitcoin className="h-8 w-8 text-orange-500" />
            <h1 className="text-3xl font-bold">Bitcoin</h1>
            <span className="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
              BTC
            </span>
            <span className="px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              Rank #1
            </span>
          </div>
          <div className="mt-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold">
                {currency === "USD"
                  ? `$${bitcoinData.usd}`
                  : `₹${bitcoinData.inr}`}
              </span>
              <span
                className={`text-sm font-semibold ${
                  bitcoinData[currency.toLowerCase() + "_24h_change"] >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {bitcoinData[currency.toLowerCase() + "_24h_change"] >= 0
                  ? "▲"
                  : "▼"}{" "}
                {Math.abs(
                  bitcoinData[currency.toLowerCase() + "_24h_change"]
                ).toFixed(2)}
                % (24H)
              </span>
            </div>
            <div className="text-lg text-gray-600 flex gap-4">
              {currency === "USD"
                ? `₹${bitcoinData.inr}`
                : `$${bitcoinData.usd}`}
              <button
                className="text-sm text-blue-600 hover:underline"
                onClick={handleCurrencyToggle}
              >
                {currency === "USD" ? "Switch to INR" : "Switch to USD"}
              </button>
            </div>
          </div>
        </>
      )}
      <div className="my-6 h-[450px]">
        <h2 className="text-xl font-semibold">Bitcoin Price Chart (USD)</h2>
        <TradingViewWidget currency={currency} key={currency} />
      </div>
    </div>
  );
};

export default GraphSection;
