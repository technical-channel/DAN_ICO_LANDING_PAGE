import React from "react";

const Documents = () => {
  return (
    <div className="max-w-[1200px] mx-auto  py-[1rem]  px-2 md:py-[2rem]">
      <h3 className="capitalize font-bold text-[#2B2D5C] py-5 text-center text-3xl pb-8 ">
        Documents
      </h3>

      <div className="flex flex-col md:flex-row gap-[20px] justify-center items-center">
        <div
          className="inline-flex px-[70px] py-3 bg-[#000] text-xl capitalize text-center rounded-lg text-white font-bold  "
          style={{
            background:
              "linear-gradient(to right, rgba(57,100,208,1) 0%, rgba(45,193,201,1) 100%)",
          }}
        >
          white paper
        </div>
        <div
          className="inline-flex px-[70px] py-3 bg-[#000] text-xl capitalize  text-center rounded-lg text-white font-bold  "
          style={{
            background:
              "linear-gradient(to right, rgba(57,100,208,1) 0%, rgba(45,193,201,1) 100%)",
          }}
        >
          lite paper
        </div>
      </div>
    </div>
  );
};

export default Documents;
