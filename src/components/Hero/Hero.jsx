import React from 'react';
import heroImage from '../../assets/sachet.jpg';

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-screen w-full" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="relative z-10 h-full flex flex-col justify-center max-w-5xl mx-auto px-4 text-[white]">
                <p className="italic text-sm">Agissons ensemble pour un environnement plus propre</p>
                <p className="text-2xl">Agissons ensemble pour un environnement plus propre</p>
                <p className="text-5xl font-bold sm:text-3xl">Agissons ensemble pour un environnement plus propre</p>
                <p className="text-2xl italic sm:text-lg">Agissons ensemble pour un environnement plus propre</p>
                <button className="mt-4 w-72 text-[1rem] font-bold bg-green-500 h-[50px] border border-green-500 text-[white] hover:bg-green-600 hover:border-green-700">Se connecter</button>
            </div>
        </div>
    );
};

export default Hero;
