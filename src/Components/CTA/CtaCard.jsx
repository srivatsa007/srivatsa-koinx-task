import { FaArrowRight } from "react-icons/fa6";

function CtaCard() {
  return (
    <div className="  max-w-md  my-8 ">
      <div className=" bg-[#0052FE] text-white rounded-lg flex items-center justify-center p-8">
        <div className="p-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Get Started with KoinX for FREE
          </h2>
          <p className="mb-6 text-center">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
          <img
            alt="Illustration"
            className="mb-6"
            height="200"
            src="/src/Components/CTA/CTAillustration.png"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <button className="btn bg-white text-[#000] text-bold flex gap-2">
            Get Started for FREE <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CtaCard;
