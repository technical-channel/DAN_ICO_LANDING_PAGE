import React from "react";

const Hero = () => {
  const data = [
    {
      number:45,
      time: "days",
    },
    {
      number: 4,
      time: "hours",
    },
    {
      number: 34,
      time: "minutes",
    },
    {
      number: 43,
      time: "seconds",
    },
  ];
  return (
    <div>
      <section
        className="  max-w-[1200px] mx-auto  pt-[6rem] md:pt-[2rem] md:pt-[9rem]  pb-[4rem] px-2    "
        id="home"
      >
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-[40px] md:gap-[20px]">
          <div className="flex-1">
            <h2 className="md:text-5xl text-3xl text-[#1F1F3E]  font-bold  pb-2 md:pb-5">
              $TPC - Lending &{" "}
            </h2>
            <h2 className=" text-xl md:text-4xl font-bold  pb-5 md:pb-[2rem]">
              Investment Platform
            </h2>

            <div className="flex gap-2 ">
              <li className="px-[35px] list-none py-[8px] bg-gradient-to-r from-[#3964d0] to-[#2dc1c9] rounded-full text-white text-lg cursor-pointer ease-in duration-300  hover:shadow-xl hover:shadow-[#060b27]/20">
                <a href="#" className="text-[14px]">
                  Whitepaper
                </a>
              </li>
              <li className=" px-[40px] py-[8px] list-none bg-gradient-to-r from-[#3964d0] to-[#2dc1c9] rounded-full text-white text-lg cursor-pointer ease-in duration-300  hover:shadow-xl hover:shadow-[#060b27]/20">
                <a href="#" className="text-[14px]">
                  Buy Token Now!
                </a>
              </li>
            </div>
          </div>

          <div className="flex-1">
            <div
              className="hero-right rounded-lg relative w-full z-[100] mt-[15px] pt-[15px] px-[17px]"
              style={{ margin: "0 0 30px" }}
            >
              <div className="clockdiv text-[#2f2e2e]  border border-[#000]  font-thin text-center text-[50px] p-[38px] rounded-xl bg-white ">
                <p className="text-[#10122d] text-[18px] font-semibold">
                  ICO WILL START IN
                </p>
                <div className="flex flex-wrap   gap-[20px] justify-center items-center mt-5 mb-5">
                  {data.map((data, index) => {
                    return (
                      <>
                        <div className="">
                          <span
                            className="p-4 flex  items-center justify-center font-bold h-[160px] w-[100px]  rounded-lg"
                            style={{ border: "2px dashed #000" }}
                          >
                            {data.number}
                          </span>
                          <div class=" capitalize text-[17px] text-dark pt-[15px] text-[#10122d] font-bold">
                            {data.time}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
