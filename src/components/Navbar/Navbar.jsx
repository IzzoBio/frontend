import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
            <nav className="flex justify-between items-center h-full max-w-6xl mx-auto px-4">
                <a href="/" className={`logo ${isScrolled ? 'text-black' : 'text-white'}`}>
                    <img src="./light.png" alt="logo" className="w-[50px] h-auto rounded-full" />
                </a>
                <div className="block md:hidden" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={30} className={isScrolled ? 'text-black' : 'text-white'} />
                    ) : (
                        <FaBars size={30} className={isScrolled ? 'text-black' : 'text-white'} />
                    )}
                </div>
                <ul className={`flex flex-col md:flex-row absolute md:static left-0 top-20 w-full md:w-auto transition-transform duration-300 ${click ? "translate-x-0" : "-translate-x-full"} md:transform-none`}>
                    <li className="py-4 md:py-0 md:px-4 font-medium">
                        <a href="#advantages" onClick={closeMenu} className={`hover:border-b-2 border-champagne-600 ${isScrolled ? 'text-black' : 'text-white'}`}>Avantages</a>
                    </li>
                    <li className="py-4 md:py-0 md:px-4 font-medium">
                        <a href="#services" onClick={closeMenu} className={`hover:border-b-2 border-champagne-600 ${isScrolled ? 'text-black' : 'text-white'}`}>Services</a>
                    </li>
                    <li className="py-4 md:py-0 md:px-4 font-medium">
                        <a href="#partner" onClick={closeMenu} className={`hover:border-b-2 border-champagne-600 ${isScrolled ? 'text-black' : 'text-white'}`}>Partenaire</a>
                    </li>
                    <li className="py-4 md:py-0 md:px-4 font-medium">
                        <a href="#newsletter" onClick={closeMenu} className={`hover:border-b-2 border-champagne-600 ${isScrolled ? 'text-black' : 'text-white'}`}>Contactez-nous</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
