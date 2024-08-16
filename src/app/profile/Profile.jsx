import React from "react";

const Sidebar = () => {
    return (
      <div className="w-64 bg-gray-100 p-6 border-r border-gray-300 ">
        <div className="text-2xl font-bold text-purple-600 mb-8 ">iZZoBio</div>
        <ul>
          <li 
            className="py-4 md:py-0 md:px-4 font-medium text-white ">
            <a href="/" className="hover:border-b-2 border-champagne-600">Profil</a>
          </li>
          <li 
            className="py-4 md:py-0 md:px-4 font-medium text-white ">
            <a href="/" className="hover:border-b-2 border-champagne-600">Enregistrement</a>
          </li>
          <li 
            className="py-4 md:py-0 md:px-4 font-medium text-white ">
            <a href="/" className="hover:border-b-2 border-champagne-600">Programme</a>
          </li>
          <li 
            className="py-4 md:py-0 md:px-4 font-medium text-white ">
            <a href="/" className="hover:border-b-2 border-champagne-600">Cartes</a>
          </li>
          <li 
            className="py-4 md:py-0 md:px-4 font-medium text-white ">
            <a href="/" className="hover:border-b-2 border-champagne-600">Settings</a>
          </li>
          
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
          src="#image src"
          alt="Profile"
          className="rounded-full mr-6 w-24 h-24 object-cover"
        />
        <div>
          <p className="mb-2"><strong>Name:</strong> Ramanantsoa Ando N'irina</p>
          <p className="mb-2"><strong>Email:</strong> ramanantsoaando00@gmail.com</p>
          <p className="mb-2"><strong>Address:</strong> analamahitsy cité lgmnt 242</p>
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
