import { useRef, useEffect, useState } from "react";
import Badge from "./Badge";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Footer = () => {
  const [trendingItems, setTrendingItems] = useState([]);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    fetchTrendingData();
  }, []);

  const fetchTrendingData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const data = await response.json();
      const trendingCoins = data.coins.slice(0, 10).map((item) => item.item);
      setTrendingItems(trendingCoins);
    } catch (error) {
      console.error("Error fetching trending data:", error);
    }
  };
  useEffect(() => {
    const prevButton1 = document.querySelector(".prev-button1");
    const nextButton1 = document.querySelector(".next-button1");

    const prevButton2 = document.querySelector(".prev-button2");
    const nextButton2 = document.querySelector(".next-button2");

    if (prevButton1 && nextButton1 && sliderRef1.current) {
      prevButton1.addEventListener("click", () => {
        sliderRef1.current.slickPrev();
      });

      nextButton1.addEventListener("click", () => {
        sliderRef1.current.slickNext();
      });
    }

    if (prevButton2 && nextButton2 && sliderRef2.current) {
      prevButton2.addEventListener("click", () => {
        sliderRef2.current.slickPrev();
      });

      nextButton2.addEventListener("click", () => {
        sliderRef2.current.slickNext();
      });
    }
  }, []);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          // background: "green",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          // background: "green"
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <footer className="bg-white p-8 relative mt-8">
      <div className="container mx-auto">
        <div className="mb-6 relative">
          <h2 className="text-lg font-semibold mb-4">You May Also Like</h2>
          <Slider ref={sliderRef1} {...settings}>
            {trendingItems.map((coin, index) => (
              <div key={index} className="">
                <Card coin={coin} />
              </div>
            ))}
          </Slider>
          {/* <button className="common-button prev-button1 absolute top-1/2 left-0 transform -translate-y-1/2 border-solid border border-gray-300 p-1 rounded-full bg-white">
            <BsChevronLeft color="black" size={20} />
          </button>
          <button className="common-button next-button1 absolute top-1/2 right-0 transform -translate-y-1/2 border-solid border border-gray-300 p-1 rounded-full bg-white">
            <BsChevronRight color="black" size={20} />
          </button> */}
        </div>
        <div className="my-4 relative">
          <h2 className="text-lg font-semibold mb-4">Trending Coins</h2>
          <Slider ref={sliderRef2} {...settings}>
            {trendingItems.map((coin, index) => (
              <div key={index} className="h-">
                <Card coin={coin} />
              </div>
            ))}
          </Slider>
          {/* <button className="common-button prev-button1 absolute top-1/2 left-0 transform -translate-y-1/2 border-solid border border-gray-300 p-1 rounded-full bg-white ">
            <BsChevronLeft color="black" size={20} />
          </button>
          <button className="common-button next-button1 absolute top-1/2 right-0 transform -translate-y-1/2 border-solid border border-gray-300 p-1 rounded-full bg-white">
            <BsChevronRight color="black" size={20} />
          </button> */}
        </div>
      </div>
    </footer>
  );
};

const Card = ({ coin }) => {
  const percentageChange = coin.data.price_change_percentage_24h.usd;
  const priceChangePercentage = percentageChange.toFixed(2);
  const color = percentageChange >= 0 ? "text-green-600" : "text-red-600";

  return (
    <div className="flex mx-2 border-2 rounded-lg overflow-hidden">
      <div className="bg-white  p-4 shadow-md w-full flex flex-col">
        <div className="flex items-center mb-2">
          <img src={coin.thumb} alt={coin.name} className="w-8 h-8 mr-2" />
          <Badge variant="secondary">{coin.symbol}</Badge>
          <p className={`text-sm ml-2 ${color}`}>
            {percentageChange >= 0 ? "+" : "-"}
            {priceChangePercentage}%
          </p>
        </div>
        <p className="text-xl font-semibold">
          {coin.name} | {coin.data.price}
        </p>
        <img
          src={coin.data.sparkline}
          alt="Sparkline"
          className="w-4/5 mt-2 self-center"
        />
      </div>
    </div>
  );
};

export default Footer;
