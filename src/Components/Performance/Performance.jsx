import coinData from "./coin_data";
import { IoMdArrowDropup } from "react-icons/io";

const Performance = () => {
  const {
    market_data: { current_price, market_cap, low_24h, high_24h },
    market_cap_change_percentage_24h,
    market_cap_fdv_ratio,
    total_volume,
    market_cap_rank,
  } = coinData;

  return (
    <>
      <div>
        <div className="flex space-x-4 mb-4 border-b overflow-hidden">
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
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl  mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Performance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">
                Today's Low
                <div className="font-medium text-base">{low_24h.usd}</div>
              </span>

              <div className="relative w-full h-1 bg-gray-200  flex">
                <div
                  className="absolute left-0 top-0 h-1 bg-orange-500"
                  style={{ width: `${(low_24h.usd / high_24h.usd) * 100}%` }}
                />
                <div className="text-sm font-medium text-black">
                  <IoMdArrowDropup />
                  {(low_24h.usd + high_24h.usd) / 2}
                </div>
                <div
                  className="absolute right-0 top-0 h-1 w-2/3 bg-lime-500"
                  style={{
                    width: `${100 - (high_24h.usd / low_24h.usd) * 100}%`,
                  }}
                />
              </div>

              <span className="text-sm font-medium text-gray-500">
                Today's High
                <div className="font-medium text-base">{high_24h.usd}</div>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">52W Low</span>
              <div className="relative w-full h-1 bg-gray-200">
                <div className="absolute left-0 top-0 h-1 w-1/3 bg-orange-500" />
                <div className="absolute right-0 top-0 h-1 w-2/3 bg-lime-500" />
              </div>
              <span className="text-sm font-medium text-gray-500">
                52W High
              </span>
            </div>
          </div>
        </div>
        {/* /// */}
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
    </>
  );
};

export default Performance;
