import React from 'react'

const Tokenomics = () => {
  return (
    <div className='max-w-[1200px] mx-auto py-10' id="tokenomics">
    <div className='hidden md:block '>
    <img src={process.env.PUBLIC_URL+'assets/roadmap.svg'}/>
    </div>
    
    <div className='block md:hidden'>
    <img src={process.env.PUBLIC_URL+'assets/mobroadmap2.svg'}/>
    </div>
    
    </div>
  )
}

export default Tokenomics