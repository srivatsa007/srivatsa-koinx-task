import React, { useRef, useEffect } from "react";
import Badge from "./Badge";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trending from "../Trending/trendingcoins";

const Footer = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    if (prevButton && nextButton) {
      prevButton.addEventListener("click", () => {
        sliderRef.current.slickPrev();
      });

      nextButton.addEventListener("click", () => {
        sliderRef.current.slickNext();
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

  // Duplicate items to loop through
  const trendingArray = trending.coins.reduce((acc, curr) => {
    acc.push(curr.item);
    acc.push(curr.item); // Duplicate each item
    return acc;
  }, []);

  return (
    <footer className="bg-gray-100 p-8 relative">
      <div className="container mx-auto">
        <div className="mb-6 relative">
          <h2 className="text-lg font-semibold mb-4">You May Also Like</h2>
          <Slider ref={sliderRef} {...settings}>
            {trendingArray.map((coin, index) => (
              <div key={index}>
                <Card coin={coin} />
              </div>
            ))}
          </Slider>
          <button
            className="prev-button absolute top-1/2 left-0 transform -translate-y-1/2"
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
            className="next-button absolute top-1/2 right-0 transform -translate-y-1/2"
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
  return (
    <div className="flex-shrink-0">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src={coin.large}
          alt={coin.name}
          className="w-20 h-20 rounded-full mx-auto"
        />
        <Badge variant="secondary">{coin.symbol}</Badge>
        <p className="text-xl font-semibold">{coin.data.price}</p>
      </div>
    </div>
  );
};

export default Footer;
