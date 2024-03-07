import { FaBitcoin } from "react-icons/fa6";
import TradingViewWidget from "./TradingViewWidget";

const GraphSection = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
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
          <span className="text-4xl font-bold">$46,953.04</span>
          <span className="text-sm font-semibold text-green-600">
            ▲ 2.51% (24H)
          </span>
        </div>
        <div className="text-lg text-gray-600">₹39,42,343</div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Bitcoin Price Chart (USD)</h2>
        {/* <div className="mt-4 flex space-x-3">
          <button className="text-xs" variant="ghost">
            1H
          </button>
          <button className="text-xs" variant="ghost">
            24H
          </button>
          <button className="text-xs" variant="ghost">
            7D
          </button>
          <button className="text-xs" variant="ghost">
            1M
          </button>
          <button className="text-xs" variant="ghost">
            3M
          </button>
          <button className="text-xs" variant="ghost">
            6M
          </button>
          <button className="text-xs" variant="ghost">
            1Y
          </button>
          <button className="text-xs" variant="ghost">
            ALL
          </button>
        </div> */}
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default GraphSection;
