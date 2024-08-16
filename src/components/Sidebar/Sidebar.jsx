import React, { useState } from 'react';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('');

    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className="w-[300px] bg-green-700 p-6 border-r border-[white] flex flex-col justify-between">
            <div>
                <div className="text-2xl font-bold text-[white] mb-8 flex border-b border-[white] p-5">
                    <img src="./light.png" className="w-[50px] h-[50px] rounded-full" />
                    <p className="text-center m-3">iZZoBio</p>
                </div>
                <ul>
                    <li 
                        className={`py-2 text-[white] font-bold cursor-pointer h-[50px] ${activeItem === 'Accueil' ? 'border-r-2 border-gray-200' : 'hover:border-r-2 border-gray-200'}`}
                        onClick={() => handleClick('Accueil')}
                    >
                        Accueil
                    </li>
                    <li 
                        className={`py-2 text-[white] cursor-pointer h-[50px] ${activeItem === 'Profile' ? 'border-r-2 border-gray-200' : 'hover:border-r-2 border-gray-200'}`}
                        onClick={() => handleClick('Profile')}
                    >
                        Profile
                    </li>
                    <li 
                        className={`py-2 text-[white] cursor-pointer h-[50px] ${activeItem === 'Enregistrement' ? 'bg-gray-200 text-white border-r-2 border-gray-200' : 'hover:bg-gray-200 hover:text-white hover:border-r-2 border-gray-200'}`}
                        onClick={() => handleClick('Enregistrement')}
                    >
                        Enregistrement
                    </li>
                    <li 
                        className={`py-2 text-[white] cursor-pointer h-[50px] ${activeItem === 'Calendrier' ? 'bg-gray-200 text-white border-r-2 border-gray-200' : 'hover:bg-gray-200 hover:text-white hover:border-r-2 border-gray-200'}`}
                        onClick={() => handleClick('Calendrier')}
                    >
                        Calendrier
                    </li>
                    <li 
                        className={`py-2 text-[white] cursor-pointer h-[50px] ${activeItem === 'Carte' ? 'bg-gray-200 text-white border-r-2 border-gray-200' : 'hover:bg-gray-200 hover:text-white hover:border-r-2 border-gray-200'}`}
                        onClick={() => handleClick('Carte')}
                    >
                        Carte
                    </li>
                </ul>
            </div>
            <div className="text-center border-t border-[white]">
                <p className="text-sm text-[white] font-bold text-[16px] text-center mt-5">Se déconnecter</p>
            </div>
        </div>
    );
};

export default Sidebar;