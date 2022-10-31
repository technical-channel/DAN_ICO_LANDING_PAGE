import React from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaFacebookF, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa'
import Message from "./Message";

const Footer = () => {
  return (
    <>
      <div className="bg-[#f6f6ff] py-[1rem] md:py-[2rem] px-2">
        <div className="">
          <h1
            className="flex justify-center capitalize text-4xl text-[#23527c] "
            style={{ fontFamily: "Lato" }}
          >
            {" "}
            Subscribe to us!
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-[10px] mb-5 mt-5 pt-5 pb-3">
          <ul className="flex  flex-wrap md:flex-nowrap  justify-center items-center list-none m-0 p-0 py-4">
            <li className="inline-block relative p-3 px-[5px]">
              <a
                href="#"
                className="  grid  rounded-full p-6  bg-gradient-to-r from-cyan-500 to-blue-500 text-white place-items-center"
              >
                {" "}
                <FaFacebookF size={40}/>
              </a>
            </li>
            <li className="inline-block  p-3 relative px-[5px]">
              <a
                href="#"
                className=" grid rounded-full p-6 place-items-center bg-gradient-to-r from-cyan-500 to-blue-500  text-white"
              >
                <FaTwitter size={40} />
              </a>
            </li>
            <li className="inline-block  p-3 relative px-[5px]">
              <a
                href="#"
                className="  grid rounded-full p-6 place-items-center  bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              >
                <FaTelegramPlane size={40} />
              </a>
            </li>
            <li className="inline-block  p-3 relative px-[5px]">
              <a
                href="#"
                className="  grid rounded-full p-6 place-items-center  bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              >
                <BsCurrencyBitcoin size={40} />
              </a>
            </li>
            <li className="inline-block  p-3 relative px-[5px]">
              <a
                href="#"
                className="  grid rounded-full p-6 place-items-center  bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              >
                <FiMail size={40} />
              </a>
            </li>
          </ul>
        </div>
        <div className="max-w-[1200px] mx-auto pb-5">
          <div className="search_main flex  flex-wrap justify-center">
            <input
              className="w-[40%] h-[50px] text-[16px] text-[#8486a6] bg-[#e7e6f2] border-xl capitalize outline-none rounded-full pl-5"
              type="text"
              placeholder="enter your email address"
            />
            <button className=" bg-gradient-to-r from-[#3964d0] to-[#2dc1c9] rounded-full text-white text-lg cursor-pointer ease-in duration-300  hover:shadow-xl hover:shadow-[#060b27]/20 mt-1">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f6f6ff] ">
        <Message />
      </div>
      <div className="bg-[#eeecf7] border-t-2  pt-5  border-[#5E8EAF]">
        <div className="flex justify-center p-4">
          <h1 className="font-bold text-xl">
            © 2022 $TCP.All Rights Reserved.
          </h1>
        </div>
       
          <ul className="flex justify-center items-center list-none m-0 p-0 py-2">
            <li className="inline-block relative p-3 px-[5px]">
              <a
                href="#"
                className="  grid  rounded-full p-4  bg-[#4765A4] text-white place-items-center"
              >
                {" "}
                <FaFacebookF size={25} />
              </a>
            </li>
            <li className="inline-block  p-3 relative px-[5px]">
              <a
                href="#"
                className=" grid rounded-full p-4 place-items-center bg-[#1C96E8] text-white"
              >
                <FaTwitter size={25} />
              </a>
            </li>
            <li className="inline-block  p-3 relative px-[5px]">
              <a
                href="#"
                className="  grid rounded-full p-4 place-items-center  bg-[#C237A0] text-white"
              >
                <AiOutlineInstagram size={25} />
              </a>
            </li>
            <li className="inline-block  p-3 relative px-[5px]">
              <a
                href="#"
                className="  grid rounded-full p-4 place-items-center  bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              >
                <FaLinkedinIn size={25}/>
              </a>
            </li>
            
          </ul>
    
      </div>
    </>
  );
};

export default Footer;
