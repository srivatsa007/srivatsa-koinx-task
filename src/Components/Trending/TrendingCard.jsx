import trending from "./trendingcoins";
import { IoMdArrowDropup } from "react-icons/io";
function TrendingCard() {
  return (
    // <div>
    //   <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
    //     <h2 className="text-2xl font-semibold text-gray-700">
    //       Trending Coins (24h)
    //     </h2>
    //     <div className="mt-4 space-y-4">
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center space-x-3">
    //           <BitcoinIcon className="h-6 w-6 text-blue-600" />
    //           <span className="font-medium text-gray-700">Ethereum (ETH)</span>
    //         </div>
    //         <div className="flex items-center space-x-1">
    //           <ArrowUpIcon className="h-4 w-4 text-green-500" />
    //           <span className="text-sm font-semibold text-green-500">
    //             8.21%
    //           </span>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center space-x-3">
    //           <BitcoinIcon className="h-6 w-6 text-orange-500" />
    //           <span className="font-medium text-gray-700">Bitcoin (BTC)</span>
    //         </div>
    //         <div className="flex items-center space-x-1">
    //           <ArrowUpIcon className="h-4 w-4 text-green-500" />
    //           <span className="text-sm font-semibold text-green-500">
    //             5.26%
    //           </span>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center space-x-3">
    //           <HexagonIcon className="h-6 w-6 text-purple-500" />
    //           <span className="font-medium text-gray-700">Polygon (MATIC)</span>
    //         </div>
    //         <div className="flex items-center space-x-1">
    //           <ArrowUpIcon className="h-4 w-4 text-green-500" />
    //           <span className="text-sm font-semibold text-green-500">
    //             4.32%
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700">
        Trending Coins (24h)
      </h2>
      <div className="mt-4 space-y-4">
        {trending.coins.map((coin, index) => {
          if (index < 3) {
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={coin.item.thumb}
                    alt={coin.item.name}
                    className="h-6 w-6"
                  />
                  <span className="font-medium text-gray-700">
                    {coin.item.name} ({coin.item.symbol.toUpperCase()})
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <IoMdArrowDropup className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-semibold text-green-500">
                    {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                  </span>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default TrendingCard;
