import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { useNavigate, useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    const [active, setActive] = useState("");

    useEffect(() => {
        // Set active tab based on current URL
        const currentPath = location.pathname;
        if (currentPath === "/") setActive("home");
        else if (currentPath === "/course") setActive("course");
        else if (currentPath === "/educator") setActive("educator");
        else if (currentPath === "/about") setActive("about");
        else if (currentPath === "/contact") setActive("contact");
    }, [location.pathname]); // Runs when URL changes

    const handleNavigation = (path, tab) => {
        setActive(tab);
        navigate(path);
    };

    return (
        <div className="border-b-2 border-gray-300 bg-white sticky top-0 z-10">
            <nav className="max-w-screen-full flex flex-wrap items-center justify-between lg:py-3 lg:px-12 sm:px-8 py-3 px-8 bg-gray-100/60">
                
                {/* Logo */}
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigation("/", "home")}>
                    <img src={assets.Logo} className="lg:w-[72px] w-[56px]" alt="Logo" />
                    <span className="lg:text-[24px] text-[20px] font-bold whitespace-nowrap block mt-1">E - Learning</span>
                </div>

                {/* Navigation Links */}
                <div className="hidden w-auto md:flex items-center">
                    <button 
                        onClick={() => handleNavigation("/", "home")} 
                        className={`lg:text-[16px] text-sm hover:text-sky-700 me-6 ${active === "home" ? "border-b-2 border-blue-500 text-blue-700" : ""}`}
                    >
                        Home
                    </button>

                    <button 
                        onClick={() => user ? handleNavigation("/course", "course") : openSignIn()} 
                        className={`lg:text-[16px] text-sm hover:text-sky-700 me-6 ${active === "course" ? "border-b-2 border-blue-500 text-blue-700" : ""}`}
                    >
                        Course
                    </button>

                    <button 
                        onClick={() => handleNavigation("/educator", "educator")} 
                        className={`lg:text-[16px] text-sm hover:text-sky-700 me-6 ${active === "educator" ? "border-b-2 border-blue-500 text-blue-700" : ""}`}
                    >
                        Educator
                    </button>

                    <button 
                        onClick={() => handleNavigation("/about", "about")} 
                        className={`lg:text-[16px] text-sm hover:text-sky-700 me-6 ${active === "about" ? "border-b-2 border-blue-500 text-blue-700" : ""}`}
                    >
                        About
                    </button>

                    <button 
                        onClick={() => handleNavigation("/contact", "contact")} 
                        className={`lg:text-[16px] text-sm hover:text-sky-700 me-10 ${active === "contact" ? "border-b-2 border-blue-500 text-blue-700" : ""}`}
                    >
                        Contact
                    </button>

                    {user ? (
                        <UserButton />
                    ) : (
                        <button 
                            onClick={() => openSignIn()} 
                            className="lg:text-[14px] text-sm text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg px-8 py-2.5"
                        >
                            Sign In
                        </button>
                    )}
                </div>

                {/* Mobile View */}
                <div className="md:hidden w-auto flex items-center">
                    {user ? (
                        <UserButton />
                    ) : (
                        <button onClick={() => openSignIn()} className="block m-auto">
                            <img src={assets.UserLogo} className="lg:w-[72px] w-[48px]" alt="User-img" />
                        </button>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
