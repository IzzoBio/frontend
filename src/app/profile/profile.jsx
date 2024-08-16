import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import DashboardChart from "../../components/Dashboard/DashboardChart";
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
        <Header />
        <Profile />
        <DashboardChart/>
      </main>
    </div>
  );
};

export default ProfileApp;
