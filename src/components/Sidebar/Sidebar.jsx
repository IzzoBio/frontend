import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className="w-[300px] bg-green-700 p-6 border-r border-[white] flex flex-col justify-between">
            <div>
                <div className="text-2xl font-bold text-[white] mb-8 flex border-b border-[white] p-5">
                    <img src="./light.png" className="w-[50px] h-[50px] rounded-full" />
                    <p className="text-center m-3">iZZoBio</p>
                </div>
                <ul>
                    <li className="py-2 text-[white] font-bold cursor-pointer hover:text-[white] h-[50px]" onClick={navigate("/home")}>Accueil</li>
                    <li className="py-2 text-[white] cursor-pointer hover:text-[white] h-[50px]" onClick={navigate("/profile")}>Profile</li>
                    <li className="py-2 text-[white] cursor-pointer hover:bg-gray-200 hover:text-white h-[50px]">Enregistrement</li>
                    <li className="py-2 text-[white] cursor-pointer hover:bg-gray-200 hover:text-white h-[50px]">Calendrier</li>
                    <li className="py-2 text-[white] cursor-pointer hover:bg-gray-200 hover:text-white h-[50px]">Carte</li>
                </ul>
            </div>
            <div className="text-center border-t border-[white]">
                <p className="text-sm text-[white] font-bold text-[16px] text-center mt-5">Se déconnecter</p>
            </div>
        </div>
    );
};

export default Sidebar;