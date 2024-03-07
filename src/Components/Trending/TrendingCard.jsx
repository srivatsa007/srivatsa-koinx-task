import { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";

function TrendingCard() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        const trendingCoinsData = data.coins.map((coin) => coin.item);
        setTrendingCoins(trendingCoinsData);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className=" mb-8 max-w-md  p-6 bg-white rounded-lg shadow-md ">
      <h2 className="text-2xl font-semibold text-gray-700">
        Trending Coins (24h)
      </h2>
      <div className="mt-4 space-y-4">
        {trendingCoins.slice(0, 3).map((coin, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={coin.thumb} alt={coin.name} className="h-6 w-6" />
              <span className="font-medium text-gray-700">
                {coin.name} ({coin.symbol.toUpperCase()})
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <IoMdArrowDropup className="h-4 w-4 text-green-500" />
              <span className="text-sm font-semibold text-green-500">
                {coin.data.price_change_percentage_24h.usd.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingCard;
