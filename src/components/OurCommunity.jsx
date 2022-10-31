import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
const OurCommunity = () => {
  const data = [
    {
      id: 1,
      imgUrl: "./assets/team1.png",
      name: "Ajay Suryavanshi",
      designation: "(Co-Founder & CEO)",
      para: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    },
    {
      id: 2,
      imgUrl: "./assets/team2.png",
      name: "Jeniffer Doe",
      designation: "(Co-Founder & CEO)",
      para: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    },
    {
      id: 3,
      imgUrl: "./assets/team3.png",
      name: "Akshay Handge",
      designation: "(Co-Founder & CEO)",
      para: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    },

    {
      id: 4,
      imgUrl: "./assets/team4.png",
      name: "Maria Willium",
      designation: "(Co-Founder & CEO)",
      para: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto py-[1rem] md:py-[1rem]">
      <h3 className="capitalize font-bold text-[#000] py-5  text-center text-3xl  ">
        our community advisors
      </h3>
      <div className="grid md:grid-cols-2   grid-cols-1 justify-center items-center gap-[20px] md:gap-[30px] px-7 md:px-0">
        {data.map((data, index) => {
          return (
            <>
            <div className="block mt-[2rem] relative shadow-lg rounded-lg bg-white team-list max-w-[700px] mx-auto">
            <div className="conte relative  md:px-[10px] py-10 bg-white z-[100]">
              <div className=" flex flex-col lg:flex-row justify-center items-center gap-[20px] team-body">
                <div className="px-[10px]">
                  <img src={process.env.PUBLIC_URL + data.imgUrl} alt="" />
                </div>
                <div className="px-[10px]">
                  <h3 className="text-2xl md:text-3xl text-[#2c2e53] font-bold m-0">
                 {data.name}
                  </h3>
                  <span className="capitalize text-lg text-black">
                {data.designation}
                  </span>
                  <ul className="flex list-none m-0 p-0 py-4">
                    <li className="inline-block relative px-[5px]">
                      <a
                        href="#"
                        className="  grid  rounded-full w-[50px] h-[50px]  text-white place-items-center"
                      >
                        {" "}
                        <FaFacebookF />
                      </a>
                    </li>
                    <li className="inline-block relative px-[5px]">
                      <a
                        href="#"
                        className=" grid rounded-full w-[50px] h-[50px] place-items-center  text-white"
                      >
                        <BsTwitter />
                      </a>
                    </li>
                    <li className="inline-block relative px-[5px]">
                      <a
                        href="#"
                        className="  grid rounded-full w-[50px] h-[50px] place-items-center   text-white"
                      >
                        <ImLinkedin2 />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-10">
                <p className="text-[#2c2e53] text-lg font-bold">
               {data.para}
      
      
                </p>
              </div>
            </div>
          </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default OurCommunity;
