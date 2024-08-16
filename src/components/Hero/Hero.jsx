import React, { useState, useEffect } from 'react';
import heroImage from '../../assets/sachet.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const titles = [
        { h1: 'Parce que l\'argent', h2: 'Ne vient pas avec des instructions' },
        { h1: 'Gérez vos finances', h2: 'Avec nos experts' },
        { h1: 'Investissez intelligemment', h2: 'Pour un avenir meilleur' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-cover bg-center h-screen w-full" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="relative z-10 h-full flex flex-col justify-center max-w-5xl mx-auto px-4 text-[white]">
                <div className="overflow-hidden">
                    <h1 className="text-5xl font-bold sm:text-3xl animate-slideIn">{titles[index].h1}</h1>
                    <h2 className="text-2xl italic sm:text-lg animate-slideIn">{titles[index].h2}</h2>
                </div>
                <p className="italic text-sm mt-4">Call us</p>
                <p className="text-2xl">1-800-123-4567</p>
                <button 
                onClick={navigate("/login")}
                className="mt-4 w-72 bg-green-500 h-[50px] border border-green-500 text-[white] hover:bg-green-600 hover:border-green-700">Se connecter</button>
            </div>
        </div>
    );
};

export default Hero;