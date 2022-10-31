import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: false,

    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,

          dots: false,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        
        },
      },
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const data = [
    {
      id: 1,
      imgURl: "./assets/probit_global.png",
    },
    {
      id: 2,
      imgURl: "./assets/bsc.png",
    },
    {
      id: 3,
      imgURl: "./assets/rimaunangissdn.svg",
    },
    {
      id: 4,
      imgURl: "./assets/rimaunangistvblack.png",
    },
    {
      id: 5,
      imgURl: "./assets/certik.svg",
    },
    {
      id: 6,
      imgURl: "./assets/bsc.png",
    },
    {
      id: 7,
      imgURl: "./assets/rimaunangissdn.svg",
    },
    {
      id: 8,
      imgURl: "./assets/rimaunangistvblack.png",
    },
  ];
  return (
    <div className="max-w-[1800px] mx-auto py-[2rem] md:py-[3rem]">
      <Slider {...settings}>
        {data.map((data, index) => {
          return (
            <>
              <div
                className="rete-list pt-[15px] px-[17px] relative z-[100] mb-5 justify-center items "
                key={index}
              >
                <div className="content relative py-[50px]  bg-white rounded-lg z-[999] border-2 ">
                  <div className="con h-[100px] flex justify-center items-center">
                    <img
                      src={process.env.PUBLIC_URL + data.imgURl}
                      alt=""
                      className="max-w-[200px] w-full mx-auto h-auto justify-center items-center px-3 md:px-0"
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
