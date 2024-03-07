import React, { useRef, useEffect } from "react";
import Badge from "./Badge";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trending from "../Trending/trendingcoins";

const Footer = () => {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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

  // Take the first 10 items from the trending object
  const trendingItems = trending.coins.slice(0, 10).map((item) => item.item);

  return (
    <footer className="bg-white p-8 relative mt-8">
      <div className="container mx-auto">
        <div className="mb-6 relative">
          <h2 className="text-lg font-semibold mb-4">You May Also Like</h2>
          <Slider ref={sliderRef1} {...settings}>
            {trendingItems.map((coin, index) => (
              <div key={index}>
                <Card coin={coin} />
              </div>
            ))}
          </Slider>
          <button
            className="prev-button1 absolute top-1/2 left-0 transform -translate-y-1/2"
            style={{
              backgroundColor: "red",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
          >
            <BsChevronLeft color="white" size={30} />
          </button>
          <button
            className="next-button1 absolute top-1/2 right-0 transform -translate-y-1/2"
            style={{
              backgroundColor: "red",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
          >
            <BsChevronRight color="white" size={30} />
          </button>
        </div>
        <div className="my-4 relative">
          <h2 className="text-lg font-semibold mb-4">Trending Coins</h2>
          <Slider ref={sliderRef2} {...settings}>
            {trendingItems.map((coin, index) => (
              <div key={index}>
                <Card coin={coin} />
              </div>
            ))}
          </Slider>
          <button
            className="prev-button2 absolute top-1/2 left-0 transform -translate-y-1/2"
            style={{
              backgroundColor: "red",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
          >
            <BsChevronLeft color="white" size={30} />
          </button>
          <button
            className="next-button2 absolute top-1/2 right-0 transform -translate-y-1/2"
            style={{
              backgroundColor: "red",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
          >
            <BsChevronRight color="white" size={30} />
          </button>
        </div>
      </div>
    </footer>
  );
};

const Card = ({ coin }) => {
  // Extracting price change percentage in USD and rounding it to 2 decimal places
  const percentageChange = coin.data.price_change_percentage_24h.usd;
  const priceChangePercentage = percentageChange.toFixed(2);

  // Determine the color based on the sign of the percentage change
  const color = percentageChange >= 0 ? "text-green-600" : "text-red-600";

  return (
    <div className="flex-shrink-0 relative">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center mb-2">
          <img
            src={coin.thumb} // Assuming 'thumb' is the property containing the icon URL
            alt={coin.name}
            className="w-8 h-8 mr-2"
          />
          <Badge variant="secondary">{coin.symbol}</Badge>
          <p className={`text-sm ml-2 ${color}`}>
            {percentageChange >= 0 ? "+" : "-"}
            {priceChangePercentage}%
          </p>
        </div>
        <p className="text-xl font-semibold">{coin.name}</p>
        <p className="text-lg font-semibold">{coin.data.price}</p>
        <img
          src={coin.data.sparkline}
          alt="Sparkline"
          className="w-full mt-2"
        />
      </div>
    </div>
  );
};

export default Footer;
