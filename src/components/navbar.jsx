import React, { useState } from 'react'
import { GiCartwheel } from 'react-icons/gi'
import { IoIosArrowForward } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

function Navbar() {
    const[toggle, setToggle] = useState(false)
    const[isMobileView, setIsMobileView] = useState(false)

    function handleToggle() {
        setToggle(!toggle)
    }

    function toggleSearchBar() {
        setIsMobileView(!isMobileView)
    }

    return(
        <>
            <nav className="w-full flex md:justify-normal justify-between items-center h-24 bg-black text-white px-6 md:px-[6rem]">
                <div className='flex items-center'>
                    <GiCartwheel size={30} />
                    <p className='hidden md:block font-bold font-roboto px-1 text-sm md:text-xl md:px-2'>MORNRIDE</p>
                </div>
                <ul className='hidden items-center px-5 font-semibold md:flex'>
                    <li className='flex items-center px-3'>Categories<IoIosArrowForward className='ml-2 mt-1 hover:rotate-90 duration-200 ease-linear' /></li>
                    <li className='px-3'>Deals</li>
                    <li className='px-3'>What's new</li>
                    <li className='px-3'>Delivery</li>
                </ul>
                <div className='flex items-center px-2'>
                <input type="email" className={`${isMobileView ? 'w-100': 'w-0'} -ml-4 md:ml-4 md:w-80 py-2 pl-2 md:pr-6 rounded-xl text-sm md:text-base outline-0 bg-[#1E1D22] transition-all duration-300`} placeholder='Search product...' />
                <FiSearch onClick={toggleSearchBar} className='font-bold -ml-6 md:-ml-7 cursor-pointer' />
                </div>
                <AiOutlineShoppingCart className='md:ml-[4rem]' />
                <div onClick={handleToggle} className="md:hidden cursor-pointer">
                    {toggle ? <AiOutlineClose /> : < AiOutlineMenu />}
                </div>
                <img src={require("../Images/ian-dooley-d1UPkiFd04A-unsplash.jpg")} className="hidden md:block w-[1.5rem] h-[1.5rem] rounded-full ml-auto" alt="profile" />
            </nav>
          
            <div className={toggle ? 'fixed left-0 h-screen bg-gray-700 w-[60%] md:hidden text-white duration-500 ease-in-out': 'fixed left-[-100%]'}>
                <ul className='flex flex-col flex-1 justify-start px-5 mt-2 font-semibold  '>
                    <li className='flex items-center py-4 px-3'>Categories<IoIosArrowForward className='mt-1 ml-2 hover:rotate-90' /></li>
                    <li className='py-4 px-3'>Deals</li>
                    <li className='py-4 px-3'>What's new</li>
                    <li className='py-4 px-3'>Delivery</li>
                </ul>
                <img src={require("../Images/ian-dooley-d1UPkiFd04A-unsplash.jpg")} className="absolute bottom-[2rem] w-[1.5rem] h-[1.5rem] rounded-full" alt="profile" />
            </div>
        </>
    )
}
export default Navbar