import React, { useState, useEffect } from 'react';
import heroImage from '../../assets/sachet.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const titles = [
        { h1: 'Parce que chaque petit geste compte', h2: 'Chaque fois que vous utilisez une poubelle, vous contribuez à préserver notre environnement. C’est un petit geste qui a un grand impact !' },
        { h1: 'Parce que les poubelles ne viennent pas avec des instructions', h2: 'Les poubelles ne sont pas seulement des réceptacles, ce sont des actes de responsabilité envers notre planète. Jetez avec soin, agissez avec conscience.' },
        { h1: 'Parce que l’argent', h2: 'Chaque geste écoresponsable est un investissement dans notre avenir. Tri, réutilisation et recyclage : pas besoin de manuel d’instructions, juste de' }
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
                onClick={()=>navigate("/login")}
                className="mt-4 w-72 bg-green-500 h-[50px] border border-green-500 text-[white] hover:bg-green-600 hover:border-green-700">Se connecter</button>
            </div>
        </div>
    );
};

export default Hero;