import React from 'react'

const BusinessSector = () => {
    const data= [
        {
            title:"Land & Property",
            para:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpatLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntut laoreet dolore magna aliquam erat volutpat.'
        },
        {
            title:"Landing & bringing loans",
            para:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpatLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntut laoreet dolore magna aliquam erat volutpat.'
        },
        {
            title:"financial trading",
            para:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpatLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntut laoreet dolore magna aliquam erat volutpat.'
        },
      
    ]
  return (
    <div className='max-w-[1200px] mx-auto about-sec px-2 ' >
    <h3 className='capitalize font-bold text-[#26BDC6] text-center text-3xl '>our business sectors</h3>
    {data.map((data,index)=> {
        return (
            <>
            <div className='py-3'>
            <h5 className='text-center text-2xl text-[#5064A8]  font-bold capitalize py-3' >{data.title}</h5>
<p className='py-2 text-center font-bold text-xl'>{data.para}</p>
<div className="flex justify-center py-3">
      <div className="inline-flex px-[50px] py-3 bg-[#000] text-xl  text-center rounded-lg text-white font-medium " style={{ background: 'linear-gradient(to right, rgba(57,100,208,1) 0%, rgba(45,193,201,1) 100%)'}}>
        Read More
      </div>
            
            </div>

    </div>
            </>
        )
    })}
    
    
    </div>
  )
}

export default BusinessSector