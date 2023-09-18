import React from 'react'


function Advert() {
    return(
        <div className='relative grid grid-cols-8 grid-rows-6 px-6 py-12 justify-center md:px-[6rem] bg-black'>
            <div className='row-span-4 col-span-4'>
                <img src={require('../images_1/image 23.jpg')} alt='/' />
            </div>
            <div className='absolute col-span-4 col-start-4 row-span-1 row-start-2 rounded-t'>
                <img src={require("../images_1/pexels-1.jpg")} className='w-[60%]' alt='/' />
            </div>
            <div className='grid_3 flex items-center col-span-3 col-start-6 row-span-2 row-start-1 md:row-start-2 bg-black text-white lg:text-3xl px-4 py-2 md:py-4 font-semibold'>
                <p className='p-1 md:p-2'>Timeless bicycles at an affordable price, without compromising on looks or design</p>
            </div>
            <div className='grid_4 absolute col-start-6 col-span-2 md:col-start-7 row-start-3 md:row-start-4 row-span-2'>
                <img src={require('../images_1/download.jpeg')} alt='/' />
            </div>
        </div>
    )
}

export default Advert;