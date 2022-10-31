import React from "react";

const PresalePhase = () => {
  const data = [
    {
      id: 1,
      pre: "pre ICO-phase 1",
    },
    {
      id: 2,
      pre: "pre ICO-phase 2",
    },
    {
      id: 3,
      pre: "pre ICO-phase 3",
    },
  ];
  return (
    <section className="  max-w-[1200px] mx-auto py-[1rem] md:py-[2rem] px-2 ">
      <h1 className="capitalize font-black text-[#1F1F3E] text-4xl py-5 text-center">
        presale phase
      </h1>
      <div className=" relative grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-[20px] px-7 md:px-0">
        {data.map((data, index) => {
          return (
            <>
              <div
                className="presales relative text-center justify-center items-center mt-3 mb-3"
                key={index}
              >
                <div className="presale-name capitalize leading-8 relative font-bold z-[100] px-[20px] text-xl  ">
                  {data.pre}
                </div>
                <div className="presale-body bg-white height-[464px] px-[20px] py-[20px] border shadow-lg relative rounded-xl z-[100]">
                  <div className="flex justify-center flex-col items-center">
                    <div className="flex items-center gap-[30px] pt-[4rem] ">
                      <img
                        src={process.env.PUBLIC_URL + "./assets/chart.png"}
                        className="max-w-[120px] md:max-w-[160px] "
                      />
                      <div>
                        <h2 className="font-bold text-[#000] text-xl">
                          Token issued
                        </h2>
                        <p className="text-[#2B283B] text-2xl font-bold">
                          60,0000
                        </p>
                        <p className="text-[#000] text-[14px] font-bold mt-5 pt-5 capitalize">
                          sold 32,408,900 tokens
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-[80px] py-10">
                      <div className="flex-1">
                        <p className="font-bold text-[#2B283B] capitalize">
                          base price
                        </p>
                        <p className="text-[#37B9C0]  font-bold text-2xl">
                          0.1 USD
                        </p>
                        <p className="capitalize font-bold text-[#2B283B] text-[16px]">
                          start date
                        </p>
                        <p className="capitalize font-extrabold text-[#2B283B] text-[16px]">
                          27 Aug 2022
                        </p>
                        <p className="capitalize font-extrabold text-[#2B283B] text-[14px]">
                          {" "}
                          12:08am
                        </p>
                      </div>

                      <div className="flex-1">
                        <p className="font-bold text-[#2B283B] capitalize">
                          base price
                        </p>
                        <p className="text-[#37B9C0]  font-bold text-2xl">
                          0.1 USD
                        </p>
                        <p className="capitalize font-bold text-[#2B283B] text-[16px]">
                          start date
                        </p>
                        <p className="capitalize font-extrabold text-[#2B283B] text-[16px]">
                          28 Aug 2022
                        </p>
                        <p className="capitalize font-extrabold text-[#2B283B] text-[14px]">
                          12:08am
                        </p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default PresalePhase;
