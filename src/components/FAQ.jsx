import React, { useState } from "react";

export default function MyApp() {
  const data = [
    {
      id: 1,
      question: "what is cryptocurrency?",
      answer: "loreum ipsum",
    },
    {
      id: 2,
      question: "what are the best cryptocurrency for buy ? ",
      answer: "loreum ipsum",
    },
    {
      id: 3,
      question: "how to buy cryptocurrency ?",
      answer: "loreum ipsum",
    },
    {
      id: 4,
      question: "how to sell cryptocurrency?",
      answer: "loreum ipsum",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto  py-[1rem]  px-2 md:py-[2rem]">
      <h3 className="capitalize font-bold text-[#2B2D5C] py-5  text-center text-3xl">
        frequently asked questions
      </h3>
      <p className='text-center  pb-10  text-xl capitalize max-w-[700px] mx-auto'>Lorem Ipsum has been the industr Ipsum has been the industry's standard dummy text evey's standard dummy text ever since the 1500s, </p>
      <div className="grid md:grid-cols-2  grid-cols-1 gap-[20px]">
        <div>
          {data.map((data, index) => (
            <Faq data={data} key={index} />
          ))}
        </div>

        <div>
          <img
            src={process.env.PUBLIC_URL + "./assets/faq.png"}
            className="max-w-[500px] w-full  mx-auto "
          />
        </div>
      </div>
    </div>
  );
}

const Faq = ({ data }) => {
  const [box, setBox] = useState(false);
  return (
    <div className="relative flex flex-col md:flex-row  items-center justify-center sm:px-0 px-4 py-5">
      <div className="w-full ">
        <div className="bg-white border-2  ">
          <div
            className="flex items-center justify-between"
            onClick={() => setBox(!box)}
          >
            <div>
              <h2 className="text-base font-bold capitalize leading-none text-black p-4">
                {data.question}
              </h2>
            </div>
            <button className="text-2xl cursor-pointer p-4">
              {box ? (
                <svg
                  role="button"
                  aria-label="close dropdown"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5L5 1L9 5"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  role="button"
                  aria-label="open dropdown"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          {box && (
            <ul className="bg-[#CDEAFA]">
              <li>
                <p className="text-base leading-normal text-gray-600 mt-4 p-4">
                  {data.answer}
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
