const PostCard = (props) => {
    const { feeds } = props;

    return (
        <div>
            {
                feeds?.map((feed) => (
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-[1000px] h-auto" key={feed.id}>
                        <p className="text-gray-500 mb-2 font-bold text-xl">Admin</p>
                        <h2 className="mb-4 text-[25px]">{feed.description}</h2>
                        <img
                            src="./1.jpg"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-700 mb-4">{feed.contenu}</p>

                    </div>
                ))
            }
        </div>
    );
};

export default PostCard;
