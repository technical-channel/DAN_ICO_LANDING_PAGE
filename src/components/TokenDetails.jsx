import React from 'react'

const TokenDetails = () => {
    const data = [

        {

            title: 'symbol',
            para: '$TPC '
        },
        {

            title: 'platform',
            para: 'binance smart chain'
        },
        {

            title: 'total supply',
            para: 'total supply 2,000,000,000'
        },
        {

            title: 'smart contract',
            para: '$TPC token'
        },
    ]
    return (
        <div className='max-w-[1200px] mx-auto  py-[1rem] md:py-[2rem] px-2' id="token">

            <h3 className="capitalize font-bold text-[#000] py-5 text-center text-3xl  ">
                token details
            </h3>
            <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-[30px]'>
                <div className='flex flex-col px-4 rounded-lg max-w-[500px] w-full mx-auto justify-center items-center mt-5 ' style={{ border: '1px solid #ccc' }}>

                    <div className=" py-3 px-2 mt-5 mb-5 rounded-lg w-full max-w-[500px] mx-auto  " id='second'>
                        <h5 className='font-bold capitalize text-white'>name</h5>
                        <p className=' text-white'>$TPC Token</p>
                    </div>
                    {data.map((data, index) => {
                        return (
                            <>
                                <div className='bg-[#DEF2F1] py-3 px-2 mt-5 mb-5 rounded-lg w-full max-w-[500px] mx-auto'>
                                    <h5 className='font-bold uppercase text-[#000]'>{data.title}</h5>
                                    <p className='capitalize text-[#000]  pt-2'>{data.para}</p>
                                </div>



                            </>
                        )
                    })}
                </div>

<div className='mt-5   max-w-[500px] mx-auto'>
<img src={process.env.PUBLIC_URL +'./assets/token.png'} className="max-w-[600px] mx-auto w-full" alt=""/></div>
            </div>




        </div>
    )
}

export default TokenDetails