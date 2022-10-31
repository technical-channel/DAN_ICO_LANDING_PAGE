import React from "react";

const Section2 = () => {
  return (
    <>
      <section
        className="max-w-[700px] mx-auto py-[2rem] md:py-[3rem] px-2"
        id="why-our-token"
      >
        <h3 className="capitalize font-black text-[#1F1F3E] text-3xl text-center py-5 mb-5">
          why buy our token
        </h3>
        <div className=" bg-[#000] px-4 py-5">
          <iframe
            width="560"
            height="315"
            className="mx-auto md:h-[315px] w-[100%] md: w-[100px]"
            src="https://www.youtube.com/embed/M576WGiDBdQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Section2;
