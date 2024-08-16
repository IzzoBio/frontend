import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <div className="fixed top-0 left-0 w-full h-20 z-50 bg-black/90">
            <nav className="flex justify-between items-center h-full max-w-6xl mx-auto px-4">
                <a href="/" className="logo">
                    <img src="./light.png" alt="logo" className="w-[50px] h-auto rounded-full" />
                </a>
                <div className="block md:hidden" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={30} className="text-white" />
                    ) : (
                        <FaBars size={30} className="text-white" />
                    )}
                </div>
                <ul className={`flex flex-col md:flex-row absolute md:static left-0 top-20 w-full md:w-auto bg-black/90 md:bg-transparent text-center md:text-left transition-transform duration-300 ${click ? "translate-x-0" : "-translate-x-full"} md:transform-none`}>
                    <li className="py-4 md:py-0 md:px-4 font-medium text-white">
                        <a href="/" onClick={closeMenu} className="hover:border-b-2 border-champagne-600">Home</a>
                    </li>
                    <li className="py-4 md:py-0 md:px-4 font-medium text-white">
                        <a href="#about" onClick={closeMenu} className="hover:border-b-2 border-champagne-600">About</a>
                    </li>
                    <li className="py-4 md:py-0 md:px-4 font-medium text-white">
                        <a href="#testimonials" onClick={closeMenu} className="hover:border-b-2 border-champagne-600">Testimonials</a>
                    </li>
                    <li className="py-4 md:py-0 md:px-4 font-medium text-white">
                        <a href="#demo" onClick={closeMenu} className="hover:border-b-2 border-champagne-600">Demo</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
