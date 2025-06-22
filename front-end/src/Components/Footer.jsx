import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";

const Footer = () => {

    const {openSignIn} = useClerk();
    const {user} = useUser();
    const checkLogIN = () => {
        if (user) {
            Course();
        } else {
            openSignIn();
        }
    };

    const navigate  = useNavigate();
    const Home=()=>{
        navigate("/");
    }
    const Course=()=>{
        navigate("/course");
    }
    const Educator=()=>{
        navigate("/educator");
    }
    const About=()=>{
        navigate("/about");
    }
    const Contact=()=>{
        navigate("/contact");
    }
    
    return (
        <div className='max-w-full bg-gray-900 text-white pt-3 '>
            <div className='flex flex-col text-center'>
                <div className='flex md:items-stretch md:flex-row flex-col md:px-24 px-24 md:pt-10 md:pb-14 py-10 md:gap-y-0 gap-y-8 gap-x-12'>
                    <div className='md:w-15 w-full flex flex-col flex-auto'>
                        <div class="flex items-center md:justify-start justify-center mb-5">
                            <img src={assets.Footer_Logo} className='w-12 me-3' alt="Logo" />
                            <span class="lg:text-[24px] text-[20px] font-bold whitespace-nowrap">E - Learning</span>
                        </div>
                        <p className='md:text-start text-justify text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe aspernatur error delectus laborum non tempora sapiente quibusdam sint, quisquam hic deleniti explicabo voluptatum itaque illum!</p>
                    </div>
                    <div className='md:w-10 w-full flex flex-col flex-auto md:items-start items-center xl:ps-36 md:ps-18 '>
                        <button className='md:text-md text-lg mb-5 font-bold'>E - Learning</button>
                        <button onClick={Home} className='md:text-xs text-sm mb-2.5 hover:underline underline-offset-5'>Home</button>
                        <button onClick={checkLogIN} className='md:text-xs text-sm mb-2.5 hover:underline underline-offset-5'>Course</button>
                        <button onClick={Educator} className='md:text-xs text-sm mb-2.5 hover:underline underline-offset-5'>Educator</button>
                        <button onClick={About} className='md:text-xs text-sm mb-2.5 hover:underline underline-offset-5'>About us</button>
                        <button onClick={Contact} className='md:text-xs text-sm hover:underline underline-offset-5'>Contact us</button>
                    </div>
                    <div className='md:w-30 w-full flex flex-col flex-auto md:items-start items-center md:text-start text-center'>
                        <h1 className='text-lg font-semibold md:mb-4 mb-2'>Subscribe to our newsletter</h1>
                        <p className='text-sm md:text-start text-justify'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                        <div className='flex md:flex-row flex-row md:mt-6 mt-8'>
                            <input className='text-xs bg-gray-700 py-3 ps-5 md:pe-12 rounded-md' type="text" placeholder='Enter your email'/>
                            <button className='text-xs py-3 px-6 ms-5 bg-blue-700 hover:bg-blue-700/90 rounded-sm'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center items-center border-t-1 border-gray-500 py-4'>
                <p className='md:text-sm text-xs'>Copyright 2025 © E - Learning. All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer