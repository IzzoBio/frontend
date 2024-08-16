const PostCard = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-[1000px] h-auto">
            <p className="text-gray-500 text-sm mb-2">Author: Emma Smith</p>
            <h3 className="text-xl font-bold mb-4">City Life</h3>
            <img
                src="https://via.placeholder.com/400x200"
                alt="City Life"
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">The city never sleeps, always alive with energy.</p>

        </div>
    );
};

export default PostCard;