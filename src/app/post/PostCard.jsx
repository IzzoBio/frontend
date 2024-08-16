const PostCard = (props) => {
    const { feeds } = props;

    return (
        <div>
            {
                feeds?.map(() => (
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-[1000px] h-auto">
                        <p className="text-gray-500 mb-2 font-bold text-xl">Admin</p>
                        <h3 className="mb-4 text-[15px]">{feeds?.description}</h3>
                        <img
                            src="https://via.placeholder.com/400x200"
                            alt="City Life"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-700 mb-4">{feeds?.contenu}</p>

                    </div>
                ))
            }
        </div>
    );
};

export default PostCard;
