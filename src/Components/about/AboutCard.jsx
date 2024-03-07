import coin_data from "../Performance/coin_data";
import { FaArrowRight } from "react-icons/fa6";

const AboutCard = () => {
  // Destructuring data from coin_data object
  const {
    market_data: { current_price },
  } = coin_data;

  return (
    <div
    // className=" w-4xl mx-auto p-8 "
    >
      <div className="  bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto mb-8">
        <h2 className="text-xl font-semibold mb-4">About Bitcoin</h2>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">What is Bitcoin?</h2>
          <p className="mb-4">
            Bitcoins price today is US${current_price?.usd}, with a 24-hour
            trading volume of ${current_price?.usd_24h_change}. BTC is{" "}
            {current_price?.usd_24h_change > 0 ? "+" : ""}
            {current_price?.usd_24h_change}% in the last 24 hours. It is
            currently {current_price?.usd_7d_change > 0 ? "+" : ""}
            {current_price?.usd_7d_change}% from its 7-day all-time high of $
            {current_price?.usd_7d_high}, and{" "}
            {current_price?.usd_7d_change > 0 ? "+" : ""}
            {current_price?.usd_7d_change}% from its 7-day all-time low of $
            {current_price?.usd_7d_low}. BTC has a circulating supply of{" "}
            {current_price?.usd_supply} BTC from a maximum supply of{" "}
            {current_price?.usd_max_supply} BTC.
          </p>
          <h3 className="text-lg font-semibold mb-4">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisis ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>
          <p className="mb-4">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
          </p>
          <p>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa hendrerit convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti lacinia congue
            ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget.
            Ullamcorper dui.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-4">
            Already Holding Bitcoin?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-lg flex h-fit">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">
                  Calculate your Profits
                </h3>
                <img
                  alt="Profit Calculation"
                  className="mb-4"
                  height="150"
                  src="https://images.unsplash.com/photo-1671459926356-9d06ffea5d4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{
                    maxHeight: "150px",
                    maxWidth: "150px",
                    objectFit: "cover",
                  }}

                />
                <button className="bg-blue-800 hover:bg-blue-900 py-2 px-4 rounded-lg">
                  Check Now
                </button>
              </div>
            </div> */}
            <div className="bg-gradient-to-r from-[#6ee7b7] to-[#1363AD] text-white p-4 rounded-lg flex h-fit">
              <div className="mr-4">
                <img
                  alt="Profit Calculation"
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1671459926356-9d06ffea5d4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{
                    maxHeight: "150px",
                    maxWidth: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-2">
                    Calculate your Profits
                  </h3>
                  <button className="bg-white py-2 px-4 rounded-lg text-gray-950 font-semibold flex items-center gap-2">
                    Check Now <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-4 rounded-lg">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">
                  Calculate your tax liability
                </h3>
                <img
                  alt="Tax Calculation"
                  className="mb-4"
                  height="250"
                  src="https://images.unsplash.com/photo-1671459922221-be8beec5c9fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{
                    aspectRatio: "250/150",
                    objectFit: "cover",
                  }}
                  width="250"
                />
                <button className="bg-green-800 hover:bg-green-900 py-2 px-4 rounded-lg">
                  Check Now
                </button>
              </div>
            </div> */}
            {/* bg-gradient-to-r from-[#6ee7b7] to-[#3b82f6] */}
            <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-4 rounded-lg flex h-fit">
              <div className="mr-4">
                <img
                  alt="Tax Calculation"
                  className="rounded-lg"
                  src="https://images.unsplash.com/photo-1671459922221-be8beec5c9fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{
                    maxHeight: "150px",
                    maxWidth: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-2">
                    Calculate your tax liability
                  </h3>
                  <button className="bg-white py-2 px-4 rounded-lg text-gray-950 font-semibold flex items-center gap-2">
                    Check Now <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              vel repudiandae natus rem ut eius vero, cum voluptas numquam sed
              commodi labore fuga. Corrupti obcaecati, repudiandae reprehenderit
              nisi ipsa similique?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
