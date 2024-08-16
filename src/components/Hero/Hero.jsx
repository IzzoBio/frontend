import React from 'react';
import heroImage from '../../assets/sachet.jpg';

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-screen w-full" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 h-full flex flex-col justify-center max-w-5xl mx-auto px-4 text-[white]">
                <p className="italic text-sm">Call us</p>
                <p className="text-2xl">1-800-123-4567</p>
                <p className="text-5xl font-bold sm:text-3xl">Because Money</p>
                <p className="text-2xl italic sm:text-lg">Doesn't come with instructions</p>
                <button className="mt-4 w-72 bg-green-500 h-[50px] border border-green-500 text-[white] hover:bg-green-600 hover:border-green-700">Se connecter</button>
            </div>
        </div>
    );
};

export default Hero;
