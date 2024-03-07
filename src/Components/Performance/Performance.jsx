import React from "react";
import coinData from "./coin_data";

const Performance = () => {
  // Extracting data from the coin_data object
  const {
    market_data: { current_price, market_cap, low_24h, high_24h },
    market_cap_change_percentage_24h,
    market_cap_fdv_ratio,
    total_volume,
    market_cap_rank,
  } = coinData;

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div>
          <div className="flex space-x-4 mb-4 border-b">
            <div className="pb-2 border-b-2 border-blue-500 text-blue-500">
              Overview
            </div>
            <div className="pb-2">Fundamentals</div>
            <div className="pb-2">News Insights</div>
            <div className="pb-2">Sentiments</div>
            <div className="pb-2">Team</div>
            <div className="pb-2">Technicals</div>
            <div className="pb-2">Tokenomics</div>
          </div>
        </div>
        <div className="mt-6">
          <div>
            <div>Performance</div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-600">Today's Low</div>
                <div className="font-medium">{low_24h.usd}</div>
                <progress className="w-full bg-red-500" value="70" max="100" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Today's High</div>
                <div className="font-medium">{high_24h.usd}</div>
                <progress
                  className="w-full bg-green-500"
                  value="90"
                  max="100"
                />
              </div>
              <div>
                <div className="text-sm text-gray-600">52W Low</div>
                <div className="font-medium">{market_cap.usd}</div>
                <progress className="w-full bg-red-500" value="30" max="100" />
              </div>
              <div>
                <div className="text-sm text-gray-600">52W High</div>
                <div className="font-medium">{current_price.usd}</div>
                <progress
                  className="w-full bg-green-500"
                  value="95"
                  max="100"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div>
            <div>Fundamentals</div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-600">Bitcoin Price</div>
                <div className="font-medium">{current_price?.usd}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Market Cap</div>
                <div className="font-medium">{market_cap?.usd}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">24h Low / 24h High</div>
                <div className="font-medium">
                  {low_24h?.usd} / {high_24h?.usd}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">
                  Market Cap Dominance
                </div>
                <div className="font-medium">
                  {market_cap_change_percentage_24h}%
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">7d Low / 7d High</div>
                <div className="font-medium">
                  {low_24h?.usd} / {high_24h?.usd}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Volume / Market Cap</div>
                <div className="font-medium">{market_cap_fdv_ratio}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Trading Volume</div>
                <div className="font-medium">{total_volume?.usd}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Market Cap Rank</div>
                <div className="font-medium">#{market_cap_rank}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">All-Time High</div>
                <div className="font-medium">$69,044.77 -75.6%</div>
                <div className="text-sm text-gray-600">
                  Date: January 12, 2023
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">All-Time Low</div>
                <div className="font-medium">$67.81 24729.1%</div>
                <div className="text-sm text-gray-600">Date: March 5, 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
