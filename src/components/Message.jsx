import React from "react";

const Message = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-8  pt-5 pb-5 md:px-0">
        <h1 className="pt-5 text-[#2c2e53] capitalize font-black text-4xl">
          Write your message
        </h1>
        
        <div className="flex flex-wrap gap-5 pb-4 justify-center items-center">
          <div className="flex-1 mt-3">
          <p className=" text-xl pb-5 pt-5">
          {" "}
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout.
        </p>
            <div>
              <div className="form_section flex  gap-5 mt-4 mb-4">
                <div className="w-full mb-2">
                  <div className="flex justify-center">
                    <input
                      type="text"
                      placeholder="Name"
                      className="px-8  w-full border rounded-xl py-4 text-black focus:outline-none items-center"
                    />
                  </div>
                </div>
                <div className="w-full mb-2">
                  <div className="flex justify-center">
                    <input
                      type="text"
                      placeholder="Email"
                      className="px-8  w-full border rounded-xl py-4 text-black focus:outline-none items-center"
                    />
                  </div>
                </div>
              </div>
              <div className="form_section flex gap-5 mt-4 mb-4">
                <div className="w-full mb-2">
                  <div className="flex justify-center">
                    <input
                      type="text"
                      placeholder="subject"
                      className="px-8  w-full border rounded-xl py-4 text-black focus:outline-none items-center"
                    />
                  </div>
                </div>
              </div>
              <div className="form_section flex gap-5 mt-4 mb-4">
                <div className="w-full mb-2">
                  <div className="flex justify-center h-[5rem]">
                    <textarea
                      type="text"
                      placeholder="Your Message"
                      className="px-8  w-full border rounded-xl py-4 rounded-md text-black focus:outline-none items-center"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  flex mx-auto text-center   justify-center items-center  md:text-left">
              <a href="#">
                <li className="block px-[16px] py-[8px] resize-y bg-gradient-to-r from-[#3964d0] to-[#2dc1c9] rounded-xl text-white text-lg cursor-pointer    ease-in duration-300  hover:shadow-xl hover:shadow-[#060b27]/20">
                  Submit Message
                </li>
              </a>
            </div>
          </div>
        
            <div className="  bg-white mt-3 border border-gray p-5 rounded-xl mb-[3rem]">
           
              
            <div className="flex gap-5  pb-5 pt-5">
            <div>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <h1 className="font-bold text-sm">Address</h1>
              
                <p className="text-sm">3481 Merlose Place, Beverly Hills</p>
              
            </div>
          </div>


       
            <div className="flex gap-5 border-t-2 pb-5 pt-5">
              <div>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h1 className="font-bold text-sm">Phone</h1>
                
                  <p className="text-sm">+25 568989898</p>
                
              </div>
            </div>


            <div className="flex gap-5 border-t-2 pb-5 pt-5">
              <div>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h1 className="font-bold text-sm">Email</h1>
                <p className="text-sm">example@example.com</p>
              </div>
            </div>
            <div className="flex gap-5 border-t-2 pb-5 pt-5">
              <div>
                <i className="fa-solid fa-clock"></i>
              </div>
              <div>
                <h1 className="font-bold text-sm">Working Hours</h1>
                <p className="text-sm">Mon to sat 9:00am to 5:00pm</p>
              </div>
            </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Message;
