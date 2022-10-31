import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
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
  return (
    <div>
      <section
        className=" top-0 w-full border border-[#E7E7E7] bg-[#fff]  z-[1000] px-2"
        style={{ zIndex: "999999999999999" }}
      >
        <nav className="  w-full  bg-white shadow">
          <div className="  justify-between px-4 mx-auto md:items-center md:flex md:px-8">
            <div>
              <div className="  flex items-center justify-between py-2 md:block">
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
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none "
                    onClick={() => setNavbar(!navbar)}
                  >
                    {console.log(navbar)}
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={` sticky flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
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
                  <li
                    className="hidden md:block  bg-gradient-to-r from-[#3964d0] to-[#2dc1c9] rounded-full text-white text-lg cursor-pointer ease-in duration-300  hover:shadow-xl hover:shadow-[#060b27]/20"
                    style={{ padding: "10px 40px" }}
                  >
                    Login
                  </li>
                </ul>

              
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
