import React from 'react'
import { TabGroup } from '@statikly/funk'
const MetaverseNFT = () => {
  
  return (
    <div>
    <section className='max-w-[1200px] mx-auto py-[2rem]  px-2' id="metaverse">
    <h3 className="uppercase font-bold text-[#26BDC6] py-5 text-center text-3xl  ">
  metaverse & nft
  </h3>
  <div className=' max-w-[1200px] mx-auto  justify-center items-center  pt-2'>
      <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL} className="max-w-[500px] mx-auto" style={{maxWidth:'500px !important'}}>
        <TabGroup.TabList className="flex max-w-[700px] mx-auto ">
          <TabGroup.Tab
            index={0}
            className="'capitalize font-bold text-white bg-[#26BDC6] px-10 py-3 w-full text-center' transition-colors duration-150"
          
          >
            Metaverse
          </TabGroup.Tab>
          <TabGroup.Tab
            index={1}
            className="uppercase  font-bold  text-white bg-[#1F1F3E] px-10 py-3 w-full text-center transition-colors duration-150"
          
          >
           nft
          </TabGroup.Tab>
          
        </TabGroup.TabList>
        <TabGroup.TabPanel
          index={0}
          className=" p-12 transition-all transform  flex flex-col"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
        <img src={process.env.PUBLIC_URL +'./assets/metaverse.png'} className="w-full max-w-[900px] mx-auto"/>
        <div className="text-center">
    
       
        
<div className="inline-flex px-[70px] py-2 md:py-3 bg-[#000] text-sm  md:text-xl  text-center rounded-lg text-white font-bold  " style={{ background: 'linear-gradient(to right, rgba(57,100,208,1) 0%, rgba(45,193,201,1) 100%)'}}>
Read More
</div>
</div>

        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={1}
          className="p-12 transition-all transform  flex flex-col"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >

    
        <div className="text-center">
        <img src={process.env.PUBLIC_URL +'./assets/metaverse.png'} className=" max-w-[900px] w-full mx-auto"/>
        <div className="inline-flex px-[70px] py-3 bg-[#000] text-xl  text-center rounded-lg text-white font-bold  " style={{ background: 'linear-gradient(to right, rgba(57,100,208,1) 0%, rgba(45,193,201,1) 100%)'}}>
        Read More
        </div>
        </div>
        </TabGroup.TabPanel>
       
      </TabGroup>
      </div>
    </section>
   
  </div>
  )
}

export default MetaverseNFT