import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 p-6 border-r border-gray-300 flex flex-col justify-between">
      <div>
        <div className="text-2xl font-bold text-purple-600 mb-8">iZZoBio</div>
        <ul>
          <li className="py-2 text-purple-600 font-bold cursor-pointer hover:bg-purple-100 hover:text-purple-700">Profil</li>
          <li className="py-2 text-gray-700 cursor-pointer hover:bg-gray-200 hover:text-gray-900">Enregistrement</li>
          <li className="py-2 text-gray-700 cursor-pointer hover:bg-gray-200 hover:text-gray-900">Program</li>
          <li className="py-2 text-gray-700 cursor-pointer hover:bg-gray-200 hover:text-gray-900">Cartes</li>
        </ul>
      </div>
      <div className="flex items-center p-4 border-t border-gray-300">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="rounded-full w-12 h-12 object-cover"
        />
        <div className="ml-3">
          <p className="font-bold">Amanda</p>
          <p className="text-sm text-gray-600">View profile</p>
        </div>
        <div className="ml-auto">
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 4a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const PostCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-lg">
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

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Recent Posts</h1>
      <div className="flex space-x-4">
        <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md">Get in touch</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md">Dark</button>
      </div>
    </div>
  );
};

const PostApp = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        <PostCard />
      </main>
    </div>
  );
};

export default PostApp;
