import React from "react";

const About = () => {
  return (
    <>
      <section
        className=" max-w-[1200px] mx-auto py-[2rem] md:py-[3rem] px-2 "
        id="about"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center gap-[20px] px-2">
          <div>
            <h1 className="capitalize font-black text-[#1F1F3E] text-4xl ">
              About Us
            </h1>
            <h5 className="uppercase font-bold text-[#1F1F3E] text-2xl mt-5 mb-5">
              What is $TPC?
            </h5>
            <p className="text-xl text-[#1F1F3E] font-semibold leading-7">
            STPC Project create a digital asset product STPC Token which is
            here to provide a breakthrough in the Food Chain and Lifestyle in-
            dustry by implementing the application of blockchain technology.
            STPC token can be used to access the entire STPC Ecosystem. In
            Roadmap Tokenomics the future, the entire ecosystem in STPC with the
            chain technology will create many ecosystems that will provide
            many uses for access for STPC tokens as an access to financial
            and creative products. One of the projects we will launch is a spe-
            cial our own P2E Game Metaverse, NFT Collection and there will
            also be a special NFT marketplace for the community.
            </p>
          </div>

          <div>
            <img
              src={process.env.PUBLIC_URL + "./assets/about.png"}
              className="w-full  max-w-[500px] mx-auto"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
