import React from 'react'

const TokenSec = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-0 md:py-[5rem]">
    <h1 className="capitalize font-black text-[#1F1F3E] py-3  text-center text-4xl  ">
   tokenomics
  </h1>
 <img src={process.env.PUBLIC_URL+'/assets/tokenomics.svg'} className="w-full mx-auto"/>
    </div>
  )
}

export default TokenSec