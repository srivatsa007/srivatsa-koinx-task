import {
  CircularProgressbar,
  // CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaDotCircle } from "react-icons/fa";

const Tokenomics = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto mb-8">
        <h2 className="text-lg font-semibold mb-4">Tokenomics</h2>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-48 h-48">
            <CircularProgressbar
              value={80}
              strokeWidth={16}
              styles={buildStyles({
                textColor: "red",
                pathColor: "#0082FF",
                trailColor: "#FAA002",
                strokeLinecap: "butt",
              })}
            />
          </div>
          <div className="flex-grow ml-8">
            <ul className="list-none space-y-2 mb-4">
              <li className="flex items-center">
                <FaDotCircle className="text-blue-500 w-4 h-4 mr-2" />
                <span>Crowdsale investors: 80%</span>
              </li>
              <li className="flex items-center">
                <FaDotCircle className="text-orange-500 w-4 h-4 mr-2" />
                <span>Foundation: 20%</span>
              </li>
            </ul>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
              ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
              bibendum amet enim sit eget leo amet. At metus orci augue fusce
              eleifend lectus eu fusce adipiscing. Voluptat ultrices nibh
              sodales massa habitasse urna felis augue. Gravida aliquam
              fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget
              justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem
              posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut.
              Vulputate ipsum aliquet odio nisi eu ac risus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
