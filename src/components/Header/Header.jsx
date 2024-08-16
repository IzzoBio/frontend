const Header = () => {
    return (
        <div className="flex justify-between items-center p-5 shadow-md mb-8 bg-[white]">
            <h1 className="text-3xl font-bold">Actualités</h1>
            <div className="flex space-x-4">
                <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md">Dark mode</button>
            </div>
        </div>
    );
};

export default Header;