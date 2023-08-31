import React from 'react'

function Herosection() {
  return (
    <div className='w-full h-screen block md:flex bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-[6rem] overflow-hidden'>
      <div className='pt-[2rem] md:pt-[6rem]'>
        <p className='w-[8rem] font-semibold text-xs text-center border rounded-2xl p-2 bg-gradient-to-r from-gray-600 via-black to-black'>LIMITED EDITION</p>
        <p className='text-3xl md:text-5xl font-semibold whitespace-nowrap mt-6'>There's not Light Bicycle<br />there's Bicycle A5 Black</p>
        <div>
        <img src={require("../images_1/Marcus bike.png")} className='block mt-[-4rem] md:hidden w-[90%]' alt="" />
      </div>  
        <p className='mt-6 leading-6'>Get your unique bicycle style with our various collections.<br /> Our finale A5 Black are available while stock fasts.</p>
        <div className='flex mt-4'>
          <p className='w-[8rem] md:w-[12rem] font-semibold text-xs md:text-base text-center text-black text-semibold border rounded-2xl p-2 bg-white'>Buy now A5 Black</p>
          <p className='w-[7rem] md:w-[12rem] font-semibold text-xs md:text-base text-center text-white text-semibold border rounded-2xl p-2 bg-black ml-4'>View collection</p>
        </div>
      </div>
      <div>
        <img src={require("../images_1/Marcus bike.png")} className='mt-[-8rem] hidden md:block w-[80%]' alt="" />
      </div>  
    </div>
  )
}

export default Herosection