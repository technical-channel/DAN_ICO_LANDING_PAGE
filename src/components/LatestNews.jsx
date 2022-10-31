import React from "react";
import Slider from "react-slick";
const LatestNews = () => {
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
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,

          dots: false,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
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
      imgURl: "./assets/blog-1.jpg",
    },
    {
      id: 2,
      imgURl: "./assets/blog-2.jpg",
    },
    {
      id: 3,
      imgURl: "./assets/blog-3.jpg",
    },
    {
      id: 4,
      imgURl: "./assets/blog-1.jpg",
    },
    {
      id: 5,
      imgURl: "./assets/blog-2.jpg",
    },
    {
      id: 6,
      imgURl: "./assets/blog-3.jpg",
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto md:py-[2rem] py-[1rem]" id="blog">
      <h1 className="capitalize font-black text-[#2B2D5C] pt-5  text-center text-4xl">
        latest news
      </h1>

      <Slider {...settings}>
        {data.map((data, index) => {
          return (
            <>
              <div className="blog-sec w-full  max-w-[350px] mx-auto relative rounded-lg  pt-10 pb-10">
                <div className="blog-img relative shadow">
                  <img
                    src={process.env.PUBLIC_URL + data.imgURl}
                    className="w-full  transition-all"
                  />
                </div>

                <div className="blog-content px-5 block relative bg-[#fff] px-[35px] shadow py-[30px] rounded-lg">
                  <span className="text-base text-[#8486a6]  " >
                    <i className="fa  fa-calendar-o pr-[8px] mb-[25px]"></i>January 29, 2022
                  </span>
                  <h4 className="font-bold text-xl pr-[20px]">
                    <a href="#" className="text-[#2c2e53] font-black ">
                      Report about the team's trip to the road show
                    </a>
                  </h4> 
                  <p className="text-[#8486a6] py-3 text-md mb-[25px]">
                    Nam nec tellus a odio tincidunt auctor are odio sed non
                    mauris. This is Photoshop's ern of Lorem Ipsum Proin
                    gravida.
                  </p>
                  <a href="#" className="uppercase text-[#3297cc] font-bold">
                    read more <i className="fa  fa-arrow-circle-o-right"></i>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default LatestNews;
