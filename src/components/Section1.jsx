import React from "react";

const Section1 = () => {
  return (
    <div>
      <div className=" max-w-[700px] mx-auto py-[2rem] md:py-[3rem] px-2">

      <div className=" bg-[#000] p-4">
      <iframe width="560" height="315" 
      className="mx-auto md:h-[315px] w-[100%] md: w-[100px]"
         src="https://www.youtube.com/embed/M576WGiDBdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     
         
     
         </div>
         <div className="flex justify-center pt-5 pb-5 mt-5">
         <div
           className="inline-flex px-[20px] md:px-[70px] py-[10px] bg-[#000] text-xl  text-center rounded-lg text-white font-bold  "
           style={{background:"linear-gradient(to right, rgba(57,100,208,1) 0%, rgba(45,193,201,1) 100%)",}}> Read More
         </div>
       </div>
      
      </div>
   
    </div>
  );
};

export default Section1;
