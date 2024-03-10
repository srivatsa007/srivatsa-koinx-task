// import coinData from "./coin_data";
// import { IoMdArrowDropup } from "react-icons/io";

// const Performance = () => {
//   const {
//     market_data: { current_price, market_cap, low_24h, high_24h },
//     market_cap_change_percentage_24h,
//     market_cap_fdv_ratio,
//     total_volume,
//     market_cap_rank,
//   } = coinData;

//   return (
//     <>
//       <div>
//         <div className="flex space-x-4 mb-4 border-b overflow-hidden">
//           <div className="pb-2 border-b-2 border-blue-500 text-blue-500">
//             Overview
//           </div>
//           <div className="pb-2">Fundamentals</div>
//           <div className="pb-2">News Insights</div>
//           <div className="pb-2">Sentiments</div>
//           <div className="pb-2">Team</div>
//           <div className="pb-2">Technicals</div>
//           <div className="pb-2">Tokenomics</div>
//         </div>
//       </div>
//       <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mb-8">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">Performance</h2>
//           <div className="space-y-4">
//             <div className="flex items-center justify-between">
//               <div className="flex flex-col items-start">
//                 <div className="text-xs font-medium text-gray-500 min-w-[100px]">
//                   Today's Low
//                 </div>
//                 <div className="font-medium text-base">{low_24h.usd}</div>
//               </div>

//               <div className="relative flex-1 h-1 bg-gray-200 flex items-center">
//                 <div
//                   className="absolute left-0 top-0 h-1 bg-orange-500"
//                   style={{
//                     width: `${100 - (low_24h.usd / high_24h.usd) * 100}%`,
//                   }}
//                 />
//                 <IoMdArrowDropup />
//                 <div
//                   className="absolute right-0 top-0 h-1 bg-lime-500"
//                   style={{
//                     width: `${(low_24h.usd / high_24h.usd) * 100}%`,
//                   }}
//                 />
//               </div>

//               <div className="flex flex-col items-end">
//                 <div className="text-xs font-medium text-end text-gray-500 min-w-[100px] w-full">
//                   Today's High
//                 </div>
//                 <div className="font-medium text-base">{high_24h.usd}</div>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex flex-col items-start">
//                 <div className="text-xs font-medium text-gray-500 min-w-[100px]">
//                   52W Low
//                 </div>
//                 <div className="font-medium text-base"></div>
//               </div>

//               <div className="relative flex-1 h-1 bg-gray-200 flex items-center">
//                 <div className="absolute left-0 top-0 h-1 w-1/3 bg-orange-500" />
//                 <div className="absolute right-0 top-0 h-1 w-2/3 bg-lime-500" />
//               </div>

//               <div className="flex flex-col items-end">
//                 <div className="text-xs font-medium text-end text-gray-500 min-w-[100px] w-full">
//                   52W High
//                 </div>
//                 <div className="font-medium text-base"></div>
//               </div>
//             </div>
//           </div>

//           {/* // */}
//         </div>
//         <div className="mt-6">
//           <h2 className="text-2xl font-semibold mb-4">Fundamentals</h2>

//           <div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="border-b-[1px] border-black/20 flex justify-between">
//                 <div className="text-sm text-gray-600">Bitcoin Price</div>
//                 <div className="font-medium">{current_price?.usd}</div>
//               </div>
//               <div className="border-b-[1px] border-black/20 flex justify-between">
//                 <div className="text-sm text-gray-600">Market Cap</div>
//                 <div className="font-medium">{market_cap?.usd}</div>
//               </div>
//               <div className="border-b-[1px] border-black/20 flex justify-between">
//                 <div className="text-sm text-gray-600">24h Low / 24h High</div>
//                 <div className="font-medium">
//                   {low_24h?.usd} / {high_24h?.usd}
//                 </div>
//               </div>
//               <div className="border-b-[1px] border-black/20 flex justify-between">
//                 <div className="text-sm text-gray-600">
//                   Market Cap Dominance
//                 </div>
//                 <div className="font-medium">
//                   {market_cap_change_percentage_24h}%
//                 </div>
//               </div>
//               <div className="border-b-[1px] border-black/20 flex justify-between">
//                 <div className="text-sm text-gray-600">7d Low / 7d High</div>
//                 <div className="font-medium">
//                   {low_24h?.usd} / {high_24h?.usd}
//                 </div>
//               </div>
//               <div className="border-b-[1px] border-black/20 flex justify-between">
//                 <div className="text-sm text-gray-600">Volume / Market Cap</div>
//                 <div className="font-medium">{market_cap_fdv_ratio}</div>
//               </div>
//               <div className="border-b-[1px] border-black/20 flex justify-between">
//                 <div className="text-sm text-gray-600">Trading Volume</div>
//                 <div className="font-medium">{total_volume?.usd}</div>
//               </div>
//               <div className="border-b-[1px] border-black/20 flex justify-between">
//                 <div className="text-sm text-gray-600">Market Cap Rank</div>
//                 <div className="font-medium">#{market_cap_rank}</div>
//               </div>
//               <div className="border-b-[1px] border-black/20 flex justify-between">
//                 <div className="text-sm text-gray-600">All-Time High</div>
//                 <div>
//                   <div className="font-medium">$69,044.77 -75.6%</div>
//                   <div className="text-sm text-gray-600">
//                     Date: January 12, 2023
//                   </div>
//                 </div>
//               </div>
//               <div className="border-b-[1px] border-black/20 flex justify-between">
//                 <div className="text-sm text-gray-600">All-Time Low</div>
//                 <div>
//                   <div className="font-medium">$67.81 24729.1%</div>
//                   <div className="text-sm text-gray-600">
//                     Date: March 5, 2022
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /// */}
//       {/* </div> */}
//     </>
//   );
// };

// export default Performance;
//
// import coin_Data from "./coin_data";
// import { useState, useEffect } from "react";
import { IoMdArrowDropup } from "react-icons/io";

const Performance = ({ coin_Data }) => {
  // const [coin_Data, setCoinData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api.coingecko.com/api/v3/coins/bitcoin"
  //       );
  //       if (response.ok) {
  //         const data = await response.json();
  //         setCoinData(data);
  //       } else {
  //         console.error("Failed to fetch data from the API");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  if (!coin_Data) return <div>Loading...</div>;

  const {
    market_data: {
      current_price,
      market_cap,
      low_24h,
      high_24h,
      market_cap_change_percentage_24h,
      market_cap_fdv_ratio,
      total_volume,
    },
    market_cap_rank,
  } = coin_Data;

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
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Performance</h2>
          <div className="space-y-4">
            {/* Existing JSX code for performance metrics */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <div className="text-xs font-medium text-gray-500 min-w-[100px]">
                  Today's Low
                </div>
                <div className="font-medium text-base">{low_24h?.usd}</div>
              </div>

              <div className="relative flex-1 h-1 bg-gray-200 flex items-center">
                <div
                  className="absolute left-0 top-0 h-1 bg-orange-500"
                  style={{
                    width: `${100 - (low_24h?.usd / high_24h?.usd) * 100}%`,
                  }}
                />
                <IoMdArrowDropup />
                <div
                  className="absolute right-0 top-0 h-1 bg-lime-500"
                  style={{
                    width: `${(low_24h?.usd / high_24h?.usd) * 100}%`,
                  }}
                />
              </div>

              <div className="flex flex-col items-end">
                <div className="text-xs font-medium text-end text-gray-500 min-w-[100px] w-full">
                  Today's High
                </div>
                <div className="font-medium text-base">{high_24h?.usd}</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <div className="text-xs font-medium text-gray-500 min-w-[100px]">
                  52W Low
                </div>
                <div className="font-medium text-base"></div>
              </div>

              <div className="relative flex-1 h-1 bg-gray-200 flex items-center">
                <div className="absolute left-0 top-0 h-1 w-1/3 bg-orange-500" />
                <div className="absolute right-0 top-0 h-1 w-2/3 bg-lime-500" />
              </div>

              <div className="flex flex-col items-end">
                <div className="text-xs font-medium text-end text-gray-500 min-w-[100px] w-full">
                  52W High
                </div>
                <div className="font-medium text-base"></div>
              </div>
            </div>
          </div>

          {/* Fundamentals */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Fundamentals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Existing JSX code for fundamental data */}
              <div className="border-b-[1px] border-black/20 flex justify-between">
                <div className="text-sm text-gray-600">Bitcoin Price</div>
                <div className="font-medium">{current_price?.usd}</div>
              </div>
              <div className="border-b-[1px] border-black/20 flex justify-between">
                <div className="text-sm text-gray-600">Market Cap</div>
                <div className="font-medium">${market_cap?.usd}</div>
              </div>
              <div className="border-b-[1px] border-black/20 flex justify-between">
                <div className="text-sm text-gray-600">24h Low / 24h High</div>
                <div className="font-medium">
                  {low_24h?.usd} / {high_24h?.usd}
                </div>
              </div>
              <div className="border-b-[1px] border-black/20 flex justify-between">
                <div className="text-sm text-gray-600">
                  Market Cap Dominance
                </div>
                <div className="font-medium">
                  {market_cap_change_percentage_24h}%
                </div>
              </div>
              <div className="border-b-[1px] border-black/20 flex justify-between">
                <div className="text-sm text-gray-600">7d Low / 7d High</div>
                <div className="font-medium">
                  {low_24h?.usd} / {high_24h?.usd}
                </div>
              </div>
              <div className="border-b-[1px] border-black/20 flex justify-between">
                <div className="text-sm text-gray-600">Volume / Market Cap</div>
                <div className="font-medium">{market_cap_fdv_ratio}</div>
              </div>
              <div className="border-b-[1px] border-black/20 flex justify-between">
                <div className="text-sm text-gray-600">Trading Volume</div>
                <div className="font-medium">{total_volume?.usd}</div>
              </div>
              <div className="border-b-[1px] border-black/20 flex justify-between">
                <div className="text-sm text-gray-600">Market Cap Rank</div>
                <div className="font-medium">#{market_cap_rank}</div>
              </div>
              <div className="border-b-[1px] border-black/20 flex justify-between">
                <div className="text-sm text-gray-600">All-Time High</div>
                <div>
                  <div className="font-medium">$69,044.77 -75.6%</div>
                  <div className="text-sm text-gray-600">
                    Date: January 12, 2023
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-black/20 flex justify-between">
                <div className="text-sm text-gray-600">All-Time Low</div>
                <div>
                  <div className="font-medium">$67.81 24729.1%</div>
                  <div className="text-sm text-gray-600">
                    Date: March 5, 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
