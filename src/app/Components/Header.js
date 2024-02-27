'use client'
import React from 'react'


const Header = ({ handleToggleModal }) => {
    return (
        <>
            <div className="lg:flex hidden items-center justify-between w-full lg:px-36 lg:py-6 px-4 py-4">
                <div className="flex hover:scale-110 transition-transform duration-500 ease-in-out justify-center items-center">
                    <img src="/Images/headerlogo.png" className="lg:max-w-[240px] max-w-[180px]"></img>
                </div>

                <div className="flex justify-center items-center hover:scale-110 transition-transform duration-500 ease-in-out">
                    <p className="lg:text-base text-xs font-medium ">Chart</p>
                </div>

                <div className="flex justify-center items-center">
                    <div className="bg-[#EEB633] hover:scale-110 transition-transform duration-500 ease-in-out rounded-[15px] lg:text-base text-xs font-medium py-2 px-4 lg:px-8">
                        Buy Now
                    </div>
                </div>
            </div>
            <div className="lg:hidden flex items-center justify-between w-full lg:px-36 lg:py-6 px-4 py-4">
                <div className="flex hover:scale-110 transition-transform duration-500 ease-in-out justify-center items-center">
                    <img src="/Images/headerlogo.png" className="lg:max-w-[240px] max-w-[180px]"></img>
                </div>

                <div className="flex justify-center items-center">
                    {/* <div className="bg-[#EEB633] hover:scale-110 transition-transform duration-500 ease-in-out rounded-[15px] lg:text-base text-xs font-medium py-2 px-4 lg:px-8">
                        Buy Now
                    </div> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="13" viewBox="0 0 21 13" fill="none" onClick={() => { handleToggleModal() }}>
                        <rect width="21" height="3" rx="1" fill="black" />
                        <rect y="5" width="21" height="3" rx="1" fill="black" />
                        <rect y="10" width="21" height="3" rx="1" fill="black" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Header;