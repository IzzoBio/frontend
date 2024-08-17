import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SidebarAdmin = () => {
    const [activeItem, setActiveItem] = useState('');
    const navigate = useNavigate();

    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className="w-[300px] bg-green-700 p-6 border-r border-[white] flex flex-col justify-between h-[100vh]">
            <div>
                <div className="text-2xl font-bold text-[white] mb-8 flex border-b border-[white] p-5">
                    <img src="./light.png" className="w-[50px] h-[50px] rounded-full" />
                    <p className="text-center m-3">iZZoBio</p>
                </div>
                <ul>
                    <li 
                        className={`py-2 text-[white] cursor-pointer h-[50px] ${activeItem === 'Tableau' ? 'border-r-2 border-gray-200 font-bold' : 'hover:border-r-2 border-gray-200'}`}
                        onClick={() => handleClick('Tableau')}
                    >
                        <Link to={"/admin/dashboard"}>Tableau de bord</Link>
                    </li>
                    <li 
                        className={`py-2 text-[white] cursor-pointer h-[50px] ${activeItem === 'Accueil' ? 'border-r-2 border-gray-200 font-bold' : 'hover:border-r-2 border-gray-200'}`}
                        onClick={() => handleClick('Accueil')}
                    >
                        <Link to={"/list"}>Utilisateurs</Link>
                    </li>
                    <li 
                        className={`py-2 text-[white] cursor-pointer h-[50px] ${activeItem === 'Profile' ? 'border-r-2 border-gray-200 font-bold' : 'hover:border-r-2 border-gray-200'}`}
                        onClick={() => handleClick('Profile')}
                    >
                        <Link to={"/admin"}>Actualités</Link>
                    </li>
                </ul>
            </div>
            <div className="text-center border-t border-[white]">
                <button 
                    onClick={() => navigate("/")} 
                    className="flex items-center justify-center text-sm text-[white] font-bold text-[16px] text-center mt-5 space-x-2"
                >
                    <img src="..\login.png" alt="Logout Icon" className="w-[20px] h-[20px]" />
                    <span>Se déconnecter</span>
                </button>
            </div>
        </div>
    );
};

export default SidebarAdmin;
