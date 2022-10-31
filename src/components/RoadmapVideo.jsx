import React from 'react'

const RoadmapVideo = () => {
  return (
    <div className=' py-0 ' id="roadmap">
    <img src={process.env.PUBLIC_URL+'./assets/waves.png'} className="w-full z-[100] " />
    <div className="bg-[#F8F8FC] py-5 md:py-20">
    <h1 className="capitalize font-black text-[#1F1F3E] text-4xl text-center "> Roadmap </h1>
    <div className=" max-w-[700px] mx-auto py-10">
   
    <p className='text-center'>   Bi Money is a lending and investment, multicurrency and
    multifunctional online platform based on blockchain technology.
    There investors and borrowers meet each other and have the
    opportunity to lend money on mutually beneficial. Bit Money is a
    unique servic</p>
    </div>
    <div className=" max-w-[700px] mx-auto bg-[#000] px-4 py-10">
   
    <iframe width="560" height="315" 
 className="mx-auto md:h-[315px] w-[100%] md: w-[100px]"
    src="https://www.youtube.com/embed/M576WGiDBdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
    </div>
   
    </div>
  )
}

export default RoadmapVideo