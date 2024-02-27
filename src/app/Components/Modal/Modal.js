'use client'
import React from 'react';
import { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose, setOpenPrivacy, handleToggleModal }) => {
    const [userChoice, setUserChoice] = useState(null);
    const [activeModal, setActiveModal] = useState(false);

    const handleAccept = () => {
        // Save user choice in local storage
        // localStorage.setItem('modalClosed', 'accept');
        // setUserChoice('accept');
        // onClose();
        setOpenPrivacy(false)
    };

    const handleDecline = () => {
        // Save user choice in local storage
        // localStorage.setItem('modalClosed', 'decline');
        // setUserChoice('decline');
        // onClose();
        setOpenPrivacy(false);
    };

    useEffect(() => {
        // Add CSS to disable scrolling when the modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }

        return () => {
            // Cleanup when the component unmounts
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        };
    }, [isOpen]);



    if (!isOpen || userChoice) {
        return null; // Do not render the modal if user has made a choice or it's not open
    }
    return (
        <div className="modal  fixed inset-0 flex  bg-[#B4FFF1] bg-opacity-25 z-[100] backdrop-blur-sm">

            <div className='bg-[#B4FFF1] h-screen w-screen relative rounded-[22px] px-10 flex flex-col pt-20'>
                <button
                    onClick={() => { handleToggleModal() }}
                    className="absolute top-4 right-6 text-black hover:text-gray-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className='flex flex-col justify-center align-middle items-center'>
                    <img src='Images/headerlogo.png' className='z-10 hover:transform hover:scale-110 hover:transition-transform hover:ease-in hover:duration-300 w-[200px]' ></img>
                </div>
                <div className='h-[3px] opacity-90 w-[100%] bg-black mt-6'>
                </div>
                <ul className="flex flex-col lg:space-x-10 space-y-5 align-middle items-center mt-16 text-center  MADE_TOMMY_Regular_PERSONAL_USE">
                    <li>
                        <a href="/" className=" text-xl font-bold text-black hover:transform hover:scale-110 transform transition-transform duration-300">Home</a>
                    </li>
                    <li>
                        <a href="/" target='_blank' className="text-xl text-black hover:transform hover:scale-110 transform transition-transform duration-300">Chart</a>
                    </li>
                    <li className='flex justify-center items-center'>
                        <div className="bg-[#EEB633] hover:scale-110 transition-transform duration-500 ease-in-out rounded-[15px] lg:text-base text-xs font-medium py-2 px-4 lg:px-8">
                            Buy Now
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Modal;
