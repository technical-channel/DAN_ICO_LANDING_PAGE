import React from "react";

const Features = () => {
  return (
    <div>
      <h1 className="capitalize font-black text-[#1F1F3E] text-4xl text-center">
        our features
      </h1>
      <img
        src={process.env.PUBLIC_URL + "./assets/waves.png"}
        className="w-full z-[100]"
      />
      <div className="bg-[#f6f6ff]">
        <div className="max-w-[1300px] mx-auto  px-5 py-[30px] ">
          <div className="flex justify-center"></div>
          <div className="hidden md:block">
            <div className="featured-lists">
              <ul>
                <li
                  className="gap-0 lg:gap-[11rem]"
                  style={{ display: "flex" }}
                >
                  <div className="">
                    <div
                      className="contents-l mr-b30 wow  fadeInUp  animated block"
                      data-wow-duration="1.3s"
                      style={{ padding: "40px 0" }}
                    >
                      <div className="flex">
                        <h2 className="font-bold text-[#2c2e53] text-xl ml-[7rem] lg:ml-[17.5rem]">
                          Community
                        </h2>
                        <a className="bg-[#3872CF] w-[10px] h-[10px] rounded-full flex mt-[0.9rem] ">
                          {/* content: '';
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
background: #3872CF;
width: 2px;
margin: 0 auto; */}
                        </a>
                      </div>

                      <p className="text-[#A6A8D0] text-right py-3 max-w-[398px] w-full">
                        Unique platform for lending and investment with a safety
                        fund and cooperation with world-wide arbitration.
                      </p>
                      <a
                        href="#"
                        className="btn1 px-[16px] py-[8px] text-[14px] font-bold bg-gradient-to-r from-[#2dc1c9] to-[#3964d0] rounded-full text-white ml-0 lg:ml-[19rem]"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <div
                    className=" wow  fadeInUp  animated"
                    data-wow-duration="1.3s"
                  >
                    <div className="max-w-[390px] imgs-l">
                      <figure>
                        <img
                          src={process.env.PUBLIC_URL + "assets/community.png"}
                          width="100%"
                        ></img>
                      </figure>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="featured-list">
              <ul>
                <li className="gap-[11rem]" style={{ display: "flex" }}>
                  {/* */}
                  <div className="imgs-l" style={{ width: "390px" }}>
                    <figure>
                      <img
                        src={process.env.PUBLIC_URL + "assets/investment.png"}
                        width="100%"
                      ></img>
                    </figure>
                  </div>
                  <div
                    className=" wow  fadeInUp  animated"
                    data-wow-duration="1.3s"
                  >
                    <div className="">
                      <div
                        className="contents-l mr-b30 wow  fadeInUp  animated block"
                        data-wow-duration="1.3s"
                        style={{ padding: "40px 0" }}
                      >
                        <div className="flex">
                          <a className="bg-[#3872CF] w-[10px] h-[10px] rounded-full flex mt-[0.9rem] lg:ml-[8.5rem] mx-1 my-1  "></a>
                          <h2 className="font-bold text-[#2c2e53] text-xl lg:ml-[0rem]">
                            Investment & Leading
                          </h2>
                        </div>
                        <p className="text-[#A6A8D0] py-3 text- lg:ml-[9.2rem]">
                          Unique platform for lending and investment with a
                          safety fund
                          <br />
                          and cooperation with world-wide arbitration.
                        </p>
                        <a
                          href="#"
                          className="btn1 px-[16px] py-[8px] text-[14px] font-bold bg-gradient-to-r from-[#2dc1c9] to-[#3964d0] rounded-full text-white ml-[9rem]"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="featured-lists">
              <ul>
                <li
                  className="gap-0 lg:gap-[11rem]"
                  style={{ display: "flex" }}
                >
                  <div className="">
                    <div
                      className="contents-l mr-b30 wow  fadeInUp  animated block"
                      data-wow-duration="1.3s"
                      style={{ padding: "40px 0" }}
                    >
                      <div className="flex">
                        <h2 className="font-bold text-[#2c2e53] text-xl ml-[0rem] lg:ml-[10rem]">
                          Property & Developement
                        </h2>
                        <a className="bg-[#3872CF] w-[10px] h-[10px] rounded-full flex mt-[0.9rem]  "></a>
                      </div>
                      <p className="text-[#A6A8D0] max-w-[410px] w-full py-2">
                        Unique platform for lending and investment with a safety
                        fund and cooperation with world-wide arbitration.
                      </p>
                      <a
                        href="#"
                        className="btn1 px-[16px] py-[8px] text-[14px] font-bold bg-gradient-to-r from-[#2dc1c9] to-[#3964d0] rounded-full text-white ml-0 lg:ml-[19rem]"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <div
                    className=" wow  fadeInUp  animated"
                    data-wow-duration="1.3s"
                  >
                    <div className="max-w-[390px] imgs-l">
                      <figure>
                        <img
                          src={process.env.PUBLIC_URL + "assets/property.png"}
                          width="100%"
                        ></img>
                      </figure>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="featured-list">
              <ul>
                <li className="gap-[11rem]" style={{ display: "flex" }}>
                  {/* */}
                  <div className="imgs-l" style={{ width: "390px" }}>
                    <figure>
                      <img
                        src={process.env.PUBLIC_URL + "assets/Earn.png"}
                        width="100%"
                      ></img>
                    </figure>
                  </div>
                  <div
                    className=" wow  fadeInUp  animated"
                    data-wow-duration="1.3s"
                  >
                    <div className="">
                      <div
                        className="contents-l mr-b30 wow  fadeInUp  animated block"
                        data-wow-duration="1.3s"
                        style={{ padding: "40px 0" }}
                      >
                        <div className="flex">
                          <a className="bg-[#3872CF] w-[10px] h-[10px] rounded-full flex mt-[0.9rem] lg:ml-[8.5rem] mx-1  "></a>
                          <h2 className="font-bold text-[#2c2e53] text-xl lg:ml-[0rem]">
                            Learn & Earn
                          </h2>
                        </div>

                        <p className="text-[#A6A8D0] text-left lg:ml-[9rem] py-2">
                          Unique platform for lending and investment with a
                          safety fund
                          <br />
                          and cooperation with world-wide arbitration.
                        </p>
                        <a
                          href="#"
                          className="btn1 px-[16px] py-[8px] text-[14px] font-bold bg-gradient-to-r from-[#2dc1c9] to-[#3964d0] rounded-full text-white ml-[9rem]"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="featured-lists">
              <ul>
                <li className="lg:gap-[11rem]" style={{ display: "flex" }}>
                  <div className="">
                    <div
                      className="contents-l mr-b30 wow  fadeInUp  animated block"
                      data-wow-duration="1.3s"
                      style={{ padding: "40px 0" }}
                    >
                      <div className="flex">
                        <h2 className="font-bold text-[#2c2e53] text-xl lg:ml-[14.6rem]">
                          Land & Property
                        </h2>
                        <a className="bg-[#3872CF] w-[10px] h-[10px] rounded-full flex mt-[0.9rem] ml-[0rem]  "></a>
                      </div>
                      <p className="text-[#A6A8D0] max-w-[409px] w-full py-2">
                        Unique platform for lending and investment with a safety
                        fund and cooperation with world-wide arbitration.
                      </p>
                      <a
                        href="#"
                        className="btn1 px-[16px] py-[8px] text-[14px] font-bold bg-gradient-to-r from-[#2dc1c9] to-[#3964d0] rounded-full text-white lg:ml-[18rem]"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <div
                    className=" wow  fadeInUp  animated"
                    data-wow-duration="1.3s"
                  >
                    <div className="max-w-[390px] imgs-l">
                      <figure>
                        <img
                          src={
                            process.env.PUBLIC_URL + "assets/Landproperty.png"
                          }
                          width="100%"
                        ></img>
                      </figure>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="featured-list">
              <ul>
                <li className="gap-[11rem]" style={{ display: "flex" }}>
                  {/* */}
                  <div className="imgs-l" style={{ width: "390px" }}>
                    <figure>
                      <img
                        src={process.env.PUBLIC_URL + "assets/Planning.png"}
                        width="100%"
                      ></img>
                    </figure>
                  </div>
                  <div
                    className=" wow  fadeInUp  animated"
                    data-wow-duration="1.3s"
                  >
                    <div className="">
                      <div
                        className="contents-l mr-b30 wow  fadeInUp  animated block"
                        data-wow-duration="1.3s"
                        style={{ padding: "40px 0" }}
                      >
                        <div className="flex">
                          <a className="bg-[#3872CF] w-[10px] h-[10px] rounded-full flex mt-[0.9rem] lg:ml-[8.5rem] mx-1 "></a>
                          <h2 className="font-bold text-[#2c2e53] text-xl lg:ml-[0rem]">
                            Planning & Build
                          </h2>
                        </div>

                        <p className="text-[#A6A8D0] text-left lg:ml-[9.2rem] py-2">
                          Unique platform for lending and investment with a
                          safety fund
                          <br />
                          and cooperation with world-wide arbitration.
                        </p>
                        <a
                          href="#"
                          className="btn1 px-[16px] py-[8px] text-[14px] font-bold bg-gradient-to-r from-[#2dc1c9] to-[#3964d0] rounded-full text-white ml-[9.2rem]"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="featured-lists">
              <ul>
                <li className="lg:gap-[11rem]" style={{ display: "flex" }}>
                  <div className="">
                    <div
                      className="contents-l mr-b30 wow  fadeInUp  animated block"
                      data-wow-duration="1.3s"
                      style={{ padding: "40px 0" }}
                    >
                      <div className="flex">
                        <h2 className="font-bold text-[#2c2e53] text-xl lg:ml-[19rem]">
                          Trading
                        </h2>
                        <a className="bg-[#3872CF] w-[10px] h-[10px] rounded-full flex mt-[0.9rem] ml-[0rem]  "></a>
                      </div>
                      <p className="text-[#A6A8D0] text-right max-w-[392px] w-full py-2">
                        Unique platform for lending and investment with a safety
                        fund and cooperation with world-wide arbitration.
                      </p>
                      <a
                        href="#"
                        className="btn1 px-[16px] py-[8px] text-[14px] font-bold bg-gradient-to-r from-[#2dc1c9] to-[#3964d0] rounded-full text-white lg:ml-[19rem]"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                  <div
                    className=" wow  fadeInUp  animated"
                    data-wow-duration="1.3s"
                  >
                    <div className="max-w-[390px] imgs-l">
                      <figure>
                        <img
                          src={process.env.PUBLIC_URL + "assets/Trading.png"}
                          width="100%"
                        ></img>
                      </figure>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className=" md:hidden">
            <div>
              <img
                src={process.env.PUBLIC_URL + "assets/community.png"}
                width="100%"
              ></img>
            </div>
            <div>
              <div>
                <h2 className="font-bold text-[#2c2e53] text-xl text-center">
                  Community
                </h2>
                <p className="text-center mt-3 text-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore excepturi accusantium qui temporibus saepe, possimus
                  aperiam, odio consectetur dolorum provident quasi beatae
                  fugiat illo aut vel voluptas nihil sequi atque!
                </p>
                <a
                  href="#"
                  className="btn1 mt-3 px-[16px] py-[8px] text-[14px] font-bold bg-gradient-to-r from-[#2dc1c9] to-[#3964d0] rounded-full text-white flex justify-center"
                >
                  Read more
                </a>
              </div>
              <div className="mt-4">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "assets/investment.png"}
                    width="100%"
                  ></img>
                </div>
                <h2 className="font-bold text-[#2c2e53] text-xl text-right">
                  Investment & Leading
                </h2>
                <p className="text-center mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore excepturi accusantium qui temporibus saepe, possimus
                  aperiam, odio consectetur dolorum provident quasi beatae
                  fugiat illo aut vel voluptas nihil sequi atque!
                </p>
                <a
                  href="#"
                  className="btn1 mt-3 px-[16px] py-[8px] text-[14px] font-bold bg-gradient-to-r from-[#2dc1c9] to-[#3964d0] rounded-full text-white flex justify-center"
                >
                  Read more
                </a>
              </div>
              <div className="mt-4">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "assets/property.png"}
                    width="100%"
                  ></img>
                </div>
                <h2 className="font-bold text-[#2c2e53] text-xl text-right">
                  Property & Developement
                </h2>
                <p className="text-center mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore excepturi accusantium qui temporibus saepe, possimus
                  aperiam, odio consectetur dolorum provident quasi beatae
                  fugiat illo aut vel voluptas nihil sequi atque!
                </p>
                <a
                  href="#"
                  className="btn1 mt-3 px-[16px] py-[8px] text-[14px] font-bold bg-gradient-to-r from-[#2dc1c9] to-[#3964d0] rounded-full text-white flex justify-center"
                >
                  Read more
                </a>
              </div>
              <div className="mt-4">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "assets/Earn.png"}
                    width="100%"
                  ></img>
                </div>
                <h2 className="font-bold text-[#2c2e53] text-xl text-right">
                  Learn & Earn
                </h2>
                <p className="text-center mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore excepturi accusantium qui temporibus saepe, possimus
                  aperiam, odio consectetur dolorum provident quasi beatae
                  fugiat illo aut vel voluptas nihil sequi atque!
                </p>
                <a
                  href="#"
                  className="btn1 mt-3 px-[16px] py-[8px] text-[14px] font-bold bg-gradient-to-r from-[#2dc1c9] to-[#3964d0] rounded-full text-white flex justify-center"
                >
                  Read more
                </a>
              </div>
              <div className="mt-4">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "assets/Landproperty.png"}
                    width="100%"
                  ></img>
                </div>
                <h2 className="font-bold text-[#2c2e53] text-xl text-right">
                  Land & Property
                </h2>
                <p className="text-center mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore excepturi accusantium qui temporibus saepe, possimus
                  aperiam, odio consectetur dolorum provident quasi beatae
                  fugiat illo aut vel voluptas nihil sequi atque!
                </p>
                <a
                  href="#"
                  className="btn1 mt-3 px-[16px] py-[8px] text-[14px] font-bold bg-gradient-to-r from-[#2dc1c9] to-[#3964d0] rounded-full text-white flex justify-center"
                >
                  Read more
                </a>
              </div>
              <div className="mt-4">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "assets/Planning.png"}
                    width="100%"
                  ></img>
                </div>
                <h2 className="font-bold text-[#2c2e53] text-xl text-right">
                  Planning & Build
                </h2>
                <p className="text-center mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore excepturi accusantium qui temporibus saepe, possimus
                  aperiam, odio consectetur dolorum provident quasi beatae
                  fugiat illo aut vel voluptas nihil sequi atque!
                </p>
                <a
                  href="#"
                  className="btn1 mt-3 px-[16px] py-[8px] text-[14px] font-bold bg-gradient-to-r from-[#2dc1c9] to-[#3964d0] rounded-full text-white flex justify-center"
                >
                  Read more
                </a>
              </div>
              <div className="mt-4">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "assets/Trading.png"}
                    width="100%"
                  ></img>
                </div>
                <h2 className="font-bold text-[#2c2e53] text-xl text-right">
                  Trading
                </h2>
                <p className="text-center mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore excepturi accusantium qui temporibus saepe, possimus
                  aperiam, odio consectetur dolorum provident quasi beatae
                  fugiat illo aut vel voluptas nihil sequi atque!
                </p>
                <a
                  href="#"
                  className="btn1 mt-3 px-[16px] py-[8px] text-[14px] font-bold bg-gradient-to-r from-[#2dc1c9] to-[#3964d0] rounded-full text-white flex justify-center"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
