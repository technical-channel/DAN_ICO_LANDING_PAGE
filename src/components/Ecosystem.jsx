import React from 'react'

const Ecosystem = () => {
const data=[
  {
    id:1,
    title:'$TPC Land & Property.com'
  },
  {
    id:2,
    title:'$TPC Trading.com'
  },
  {
    id:3,
    title:'$TPC Business Angel.com'
  },
]

  return (
    <div>
    <section  className=" max-w-[1200px] mx-auto md:py-[2rem] py-[2rem] px-2 ecosystem-sec">
      <h1 className="capitalize font-black text-[#1F1F3E] py-3  text-center text-4xl  ">
        Our Ecosystem
      </h1>
      <div></div>
      <div className=" flex flex-col md:flex-row gap-4 md:pt-[3rem] pt-0  md:pb-[3rem] pb-0">
        <div className="flex-1">
          <div className="max-w-[450px]">
            <img src={process.env.PUBLIC_URL + "assets/eco.png"} width="100%" />
          </div>
        </div>

        <div className="flex-1">
        {data.map((data,index)=> {
          return (
            <>
            <div className='pt-5 pb-5'>
            <div className="ecosystem pt-[15px] px-[17px] relative z-[100] mb-5 justify-center items w-full md:w-[400px] ">
            <div className="content relative pt-[15px] pb-[15px] border-2 border-gray bg-white rounded-lg z-[999]">
              <div className="flex  justify-center items-center con h-[20px] font-bold ">
                <h1 className='font-bold'>{data.title}</h1>
              </div>
            </div>
          </div>
          </div>
            </>
          )
        })}
          
          
        </div>
      </div>
    </section>
    
    </div>
  )
}

export default Ecosystem