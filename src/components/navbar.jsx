import React, { useState } from 'react'
import { GiCartwheel } from 'react-icons/gi'
import { IoIosArrowForward } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function Navbar() {
    const[toggle, setToggle] = useState(false)

    function handleToggle() 
    return(
        <div className="bg-black">
            <nav className="w-full flex md:justify-normal justify-between items-center h-24 text-white px-6 md:px-12">
                <div className='flex items-center'>
                    <GiCartwheel size={30} />
                    <p className='font-bold font-roboto px-1 text-sm md:text-xl md:px-2'>MORNRIDE</p>
                </div>
                <ul className='hidden items-center px-5 font-semibold md:flex'>
                    <li className='flex items-center px-3'>Categories<IoIosArrowForward className='ml-2 mt-1 hover:rotate-90 transition duration-200 ease-linear' /></li>
                    <li className='px-3'>Deals</li>
                    <li className='px-3'>What's new</li>
                    <li className='px-3'>Delivery</li>
                </ul>
                <form className='flex items-center'>
                <input type="email" className="w-40 -ml-4 md:ml-4 md:w-80 py-2 px-4 rounded-xl text-sm md:text-base outline-0 bg-[#1E1D22]" placeholder='Search product...' />
                <FiSearch className='font-bold -ml-6 md:-ml-8' />
                </form>
                <AiOutlineShoppingCart className='md:ml-[4rem]' />
            </nav>
        </div>
    )
}
export default Navbar