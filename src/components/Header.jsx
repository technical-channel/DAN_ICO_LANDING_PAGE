import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { a } from "react-router-dom";
import { IoCloseCircleSharp, IoWallet, IoExitOutline } from "react-icons/io5";
// import { spliceString } from "../../Helpers/utils";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
  const NavData = [
    {
      title: "home",
      link: "",
    },
    {
      title: "about",
      link: "about",
    },

    {
      title: "why buy our token",
      link: "why-our-token",
    },
    {
      title: "sales",
      link: "sales",
    },
    {
      title: "roadmap",
      link: "roadmap",
    },
    {
      title: "tokenomics",
      link: "tokenomics",
    },

    {
      title: "metaverse & nft",
      link: "metaverse",
    },
    {
      title: "team",
      link: "team",
    },

    {
      title: "other",
      link: "other",
    },

    {
      title: "gallery",
      link: "gallery",
    },

    {
      title: "blog",
      link: "blog",
    },
  ];
  const TabNavData = [
    {
      title: "home",
      link: "home",
    },
    {
      title: "about",
      link: "about",
    },

    {
      title: " token",
      link: "token",
    },

    {
      title: "tokenomics",
      link: "tokenomics",
    },

    {
      title: "metaverse",
      link: "metaverse",
    },
  ];

  const [isConnect, setisConnect] = useState(false);
  const [isConnetModalOpen, setisConnetModalOpen] = useState(false);
  const [isBurger, setisBurger] = useState(false);
  useEffect(() => {
    setisConnetModalOpen(props._isConnectModalOpen);
  }, [props._isConnectModalOpen]);

  useEffect(() => {
    setisConnect(props._isConnect);
  }, [props._isConnect]);

  function handleBurger() {
    setisBurger(!isBurger);
  }

  function handleCloseConnectModal() {
    setisConnetModalOpen(false);
  }
  // For Open Connect Modal
  function handleOpenConnectModal() {
    setisConnetModalOpen(true);
  }
  return (
    <>
      <section
        className="sticky top-0 w-full border border-[#E7E7E7] bg-[#fff]  z-[1000] px-2"
        style={{ zIndex: "999999999999999" }}
      >
        <div className="max-w-[1800px] mx-auto py-2 ">
          <div className="flex justify-between  items-center">
            <div>
              <Link to="/">
                <div className="cursor-pointer max-w-[85px]">
                  <img
                    src={process.env.PUBLIC_URL + "assets/logo.png"}
                    width="100%"
                  ></img>
                </div>
              </Link>
            </div>
            {/ Navigation  as  /}
            <div className="hidden lg:flex gap-4 ">
              <ul className="flex gap-4 justify-center items-center font-bold text-lg">
                {NavData.map((data, key) => (
                  <li className="cursor-pointer">
                    <a
                      href={`#${data.link}`}
                      className="font-bold text-[16px] capitalize"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}

                <li className="cursor-pointer">
                  <a href="#" className="flex items-center gap-2">
                    <img
                      src={process.env.PUBLIC_URL + "assets/ukflag.png"}
                      className="w-[23px] h-[23px] mx-auto"
                    />
                    <select className="vodiapicker text-base w-[75px]">
                      <option
                        value="en"
                        className="test"
                        data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/LetterA.svg/2000px-LetterA.svg.png"
                      >
                        English
                      </option>
                      <option
                        value="au"
                        data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/NYCS-bull-trans-B.svg/480px-NYCS-bull-trans-B.svg.png"
                      >
                        Engllish (AU)
                      </option>
                      <option
                        value="uk"
                        data-thumbnail="https://glot.io/static/img/c.svg?etag=ZaoLBh_p"
                      >
                        Chinese
                      </option>
                      <option
                        value="cn"
                        data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/NYCS-bull-trans-D.svg/2000px-NYCS-bull-trans-D.svg.png"
                      >
                        German
                      </option>
                      <option
                        value="de"
                        data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MO-supp-E.svg/600px-MO-supp-E.svg.png"
                      >
                        Danish
                      </option>
                      <option
                        value="dk"
                        data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/267px-F_icon.svg.png"
                      >
                        French
                      </option>
                      <option
                        value="fr"
                        data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png"
                      >
                        Greek
                      </option>
                      <option
                        value="gr"
                        data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/4H_Emblem.svg/1000px-4H_Emblem.svg.png"
                      >
                        Italian
                      </option>
                    </select>

                    <div className="lang-select">
                      <button className="btn-select" value=""></button>
                      <div className="b">
                        <ul id="a"></ul>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <ul>
                <a href="#">
                  <li
                    className="hidden md:block  bg-gradient-to-r from-[#3964d0] to-[#2dc1c9] rounded-full text-white text-lg cursor-pointer ease-in duration-300  hover:shadow-xl hover:shadow-[#060b27]/20"
                    style={{ padding: "10px 40px" }}
                  >
                    Login
                  </li>
                </a>
              </ul>
            </div>

            <div className="hidden sm:block md:hidden">
              <div className="flex gap-4 block ">
                <ul className="flex gap-4 justify-center items-center font-bold text-lg">
                  {TabNavData.map((data, key) => (
                    <li className="cursor-pointer">
                      <a
                        href={`#${data.link}`}
                        className="font-bold text-[16px] capitalize"
                      >
                        {data.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="block lg:hidden" onClick={handleBurger}>
              <GiHamburgerMenu size={30} />
            </div>
          </div>
        </div>
      </section>
      {isBurger && (
        <div className="fixed z-[10000] from-[#067aca] to-[#02e1c7]  py-[10px] w-full top-[73px]">
          <div className="flex flex-col items-center w-full  drop-shadow-xl">
            <a
              href="/"
              onClick={() => setisBurger(false)}
              className="hover:bg-black w-full border-b-2 rounded-lg cursor-pointer transition duration-250 ease-out hover:ease-in"
            >
            
            </a>
            <a
              href="#tokenomics"
              onClick={() => setisBurger(false)}
              className=" w-full border-b-2 rounded-lg cursor-pointer transition duration-250 ease-out hover:ease-in"
            >
              <div className="px-[16px] py-[16px] text-white bg-gradient-to-r from-[#067aca] to-[#02e1c7]">
                Home
              </div>
            </a>
            <a
              href="#mobileroadmap"
              onClick={() => setisBurger(false)}
              className=" w-full border-b-2 rounded-lg cursor-pointer transition duration-250 "
            >
              <div className="px-[16px] py-[16px] text-white bg-gradient-to-r from-[#067aca] to-[#02e1c7] ">
                About
              </div>
            </a>
            <a
              href="#mobileroadmap"
              onClick={() => setisBurger(false)}
              className=" w-full border-b-2 rounded-lg cursor-pointer transition duration-250 "
            >
              <div className="px-[16px] py-[16px] text-white bg-gradient-to-r from-[#067aca] to-[#02e1c7] ">
                Why Buy Our Token
              </div>
            </a>
            <a
              href="#mobileroadmap"
              onClick={() => setisBurger(false)}
              className=" w-full border-b-2 rounded-lg cursor-pointer transition duration-250 "
            >
              <div className="px-[16px] py-[16px] text-white bg-gradient-to-r from-[#067aca] to-[#02e1c7] ">
                Sales
              </div>
            </a>
            <a
              href="#mobileroadmap"
              onClick={() => setisBurger(false)}
              className=" w-full border-b-2 rounded-lg cursor-pointer transition duration-250 "
            >
              <div className="px-[16px] py-[16px] text-white bg-gradient-to-r from-[#067aca] to-[#02e1c7] ">
                Roadmap
              </div>
            </a>
            <a
              href="#mobileroadmap"
              onClick={() => setisBurger(false)}
              className=" w-full border-b-2 rounded-lg cursor-pointer transition duration-250 "
            >
              <div className="px-[16px] py-[16px] text-white bg-gradient-to-r from-[#067aca] to-[#02e1c7] ">
                Tokenomics
              </div>
            </a>
            <a
              href="#mobileroadmap"
              onClick={() => setisBurger(false)}
              className=" w-full border-b-2 rounded-lg cursor-pointer transition duration-250 "
            >
              <div className="px-[16px] py-[16px] text-white bg-gradient-to-r from-[#067aca] to-[#02e1c7] ">
                Metaverse & NFT
              </div>
            </a>
            <a
              href="#mobileroadmap"
              onClick={() => setisBurger(false)}
              className=" w-full border-b-2 rounded-lg cursor-pointer transition duration-250 "
            >
              <div className="px-[16px] py-[16px] text-white bg-gradient-to-r from-[#067aca] to-[#02e1c7] ">
                Team
              </div>
            </a>
            <a
              href="#mobileroadmap"
              onClick={() => setisBurger(false)}
              className=" w-full border-b-2 rounded-lg cursor-pointer transition duration-250 "
            >
              <div className="px-[16px] py-[16px] text-white bg-gradient-to-r from-[#067aca] to-[#02e1c7] ">
                Other
              </div>
            </a>
            <a
              href="#mobileroadmap"
              onClick={() => setisBurger(false)}
              className=" w-full border-b-2 rounded-lg cursor-pointer transition duration-250 "
            >
              <div className="px-[16px] py-[16px] text-white bg-gradient-to-r from-[#067aca] to-[#02e1c7] ">
                Gallery
              </div>
            </a>
            <a
              href="#mobileroadmap"
              onClick={() => setisBurger(false)}
              className=" w-full border-b-2 rounded-lg cursor-pointer transition duration-250 "
            >
              <div className="px-[16px] py-[16px] text-white bg-gradient-to-r from-[#067aca] to-[#02e1c7] ">
                Blog
              </div>
            </a>

            <div className="hover:bg-[#f0f7ff] w-full border-b-2 rounded-lg cursor-pointer transition duration-250">
              {!isConnect && (
                <div
                  onClick={() => {
                    setisBurger(false);
                    handleOpenConnectModal();
                  }}
                  className="  px-[16px] py-[8px] bg-gradient-to-r from-[#067aca] to-[#02e1c7] rounded-md text-white cursor-pointer ease-in duration-300  "
                >
                  CONNECT WALLET
                </div>
              )}
            </div>
            <div className="hover:bg-[#f0f7ff] w-full border-b-2 rounded-lg cursor-pointer transition duration-250 ease-out hover:ease-in">
              {" "}
              {isConnect && (
                <div className="group ">
                  <div className="flex gap-3 px-[16px] py-[8px] bg-gradient-to-r from-[#067aca] to-[#02e1c7] rounded-md text-white justify-center cursor-pointer ease-in duration-300  hover:shadow-xl hover:shadow-[#060b27]/20">
                    <span>
                      <IoWallet size={20} />
                    </span>{" "}
                    <span className="text-white"></span>
                  </div>
                  <ul className="absolute hidden text-gray-700 pt-1  group-hover:block shadow-xl bg-gradient-to-r from-[#067aca] to-[#02e1c7] shadow-[#060b27]/20 rounded-md hover: ">
                    <li className=" flex text-white gap-3 px-[16px] py-[8px] cursor-pointer  rounded-md">
                      <span>
                        <IoExitOutline size={20} />
                      </span>
                      <span className="text-white">Disconnect Wallet</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/ Wallect Connect option /}
      {isConnetModalOpen && (
        <div className="block fixed overflow-hidden top-0 z-[1000] h-full w-full">
          <div className="flex justify-center flex-col h-full items-center bg-[#00000052]    ">
            <div className=" rounded-lg  max-h-[500px] max-w-[500px] w-full  ">
              <div
                className="mb-[20px] cursor-pointer"
                onClick={handleCloseConnectModal}
              >
                <IoCloseCircleSharp
                  size={40}
                  color={"#02e1c7"}
                  border={"#067aca"}
                  className="ml-auto hover:opacity-90"
                />
              </div>
              <div className="border-2 border-[#067aca] rounded-lg ">
                {" "}
                <div className="rounded-tl-lg rounded-tr-lg  py-[25px] bg-gradient-to-r from-[#067aca] to-[#02e1c7]">
                  <h3 className=" text-white text-2xl m-0 pl-5">
                    Connect Wallet
                  </h3>
                </div>
                <div className="">
                  <div className=" flex flex-col gap-5 font-semibold text-xl  p-[16px] pb-[32px]  rounded-lg">
                    <div className="  flex p-3 items-center border border-[#e8ecf4] cursor-pointer hover:shadow-xl hover:shadow-[#060b27]/10 rounded ease-out duration-300">
                      <span>
                        <img
                          src={process.env.PUBLIC_URL + "/assets/metamask.svg"}
                          alt="metamask"
                          width="32px"
                        ></img>
                      </span>
                      <span className="ml-3">Metamask</span>
                    </div>
                    {/* <div
                  onClick={() => {
                    UpdateConnectLoading(true);
                    ConnectWeb3Wallet().then(async () => {
                      setisConnect(true);
                  
                      handleCloseConnectModal();                       });
                  }}
                  className="flex p-3 items-center border border-[#e8ecf4] cursor-pointer hover:shadow-xl hover:shadow-[#060b27]/10 rounded ease-out duration-300"
                >
                  <span>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/walletconnect.png"
                      }
                      alt="wallet_Connect"
                      width="32px"
                    ></img>
                  </span>
                  <span className="ml-3">Wallet Connect</span>
                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
