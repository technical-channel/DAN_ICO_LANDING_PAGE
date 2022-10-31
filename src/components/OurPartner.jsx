import React from "react";

const OurPartner = () => {
  const data = [
    {
      imgURL: "./assets/logos/partner1.png",
    },
    {
      imgURL: "./assets/logos/partner2.png",
    },
    {
      imgURL: "./assets/logos/partner3.png",
    },
    {
      imgURL: "./assets/logos/partner4.png",
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto  py-[1rem]  px-2 md:py-[2rem]">
      <h3 className="capitalize font-black text-[#2B2D5C] py-5  text-center text-3xl">
        our partners
      </h3>
      <p className="text-center  pb-10  text-xl capitalize max-w-[700px] mx-auto">
        Lorem Ipsum has been the industr Ipsum has been the industry's standard
        dummy text evey's standard dummy text ever since the 1500s
      </p>

      <div className="flex flex-wrap justify-center items-center gap-[30px] pt-5 pb-5">
        {data.map((data, index) => {
          return (
            <>
              <img src={process.env.PUBLIC_URL + data.imgURL} alt=""  className="max-w-[200px] mx-auto"/>
            </>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-[30px] py-5">
        {data.map((data, index) => {
          return (
            <>
              <img src={process.env.PUBLIC_URL + data.imgURL} alt="" className="max-w-[200px] mx-auto" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default OurPartner;
