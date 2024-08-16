import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 p-6 border-r border-gray-300">
      <div className="text-2xl font-bold text-purple-600 mb-8">iZZoBio</div>
      <ul>
        <li className="py-2 text-purple-600 font-bold cursor-pointer">Profil</li>
        <li className="py-2 text-gray-700 cursor-pointer">Enregistrement</li>
        <li className="py-2 text-gray-700 cursor-pointer">Program</li>
        <li className="py-2 text-gray-700 cursor-pointer">Cartes</li>
        <li className="py-2 text-gray-700 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full mr-6 w-24 h-24 object-cover"
        />
        <div>
          <p className="mb-2"><strong>Name:</strong> Ramanantsoa Ando</p>
          <p className="mb-2"><strong>Email:</strong> ramanantsoaando00@gmail.com</p>
          <p className="mb-2"><strong>Address:</strong> Analamahitsy Cité lgmnt 242</p>
          <p className="mb-2"><strong>Points:</strong> 1500</p>
        </div>
      </div>
    </div>
  );
};

const ProfileApp = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-end mb-6">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md mr-4">Theme: dark</button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md">Get In Touch</button>
        </div>
        <Profile />
      </main>
    </div>
  );
};

export default ProfileApp;
