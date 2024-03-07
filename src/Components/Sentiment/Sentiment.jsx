import { AiOutlineRise } from "react-icons/ai";
import { HiNewspaper } from "react-icons/hi";

const Sentiment = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4">Sentiment</h2>
      <div className="flex space-x-4 mb-8">
        <div className="flex-1 bg-gray-100 p-4 rounded-lg flex flex-col items-center">
          <div className="rounded-full bg-blue-500 text-white p-2 mb-2">
            <HiNewspaper size={24} />
          </div>
          <p className="text-sm font-medium mb-2">
            Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
            mattis enim tincidunt.
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
            faucibus metus quis. Amet sapien quam viverra adipiscing
            condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
            sit nisi viverra natoque lacinia libero enim.
          </p>
        </div>
        <div className="flex-1 bg-gray-100 p-4 rounded-lg flex flex-col items-center">
          <div className="rounded-full bg-green-500 text-white p-2 mb-2">
            <AiOutlineRise size={24} />
          </div>
          <p className="text-sm font-medium mb-2">
            Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
            mattis enim tincidunt.
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
            faucibus metus quis. Amet sapien quam viverra adipiscing
            condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
            sit nisi viverra in a adipiscing metus quis del
          </p>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-4">Analyst Estimates</h2>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium">Buy</span>
          <span className="text-sm font-medium">76%</span>
        </div>
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "76%" }}></div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium">Hold</span>
          <span className="text-sm font-medium">8%</span>
        </div>
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "8%" }}></div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium">Sell</span>
          <span className="text-sm font-medium">16%</span>
        </div>
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "16%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
