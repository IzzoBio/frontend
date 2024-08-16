const Header = (props) => {
    const { title } = props;
    
    return (
        <div className="flex justify-between items-center p-5 shadow-md mb-8 bg-[white]">
            <h1 className="text-2xl font-bold">{title}</h1>
        </div>
    );
};

export default Header;