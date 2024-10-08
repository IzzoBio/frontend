import { useEffect } from "react";
import Header from "../../components/Header/Header";
import DashboardChart from "../../components/Dashboard/DashboardChart";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import CurrentUserInfo from "../../utils/token";

const Profile = () => {
  const profile = CurrentUserInfo();

  return (
    <div className="bg-white p-8 rounded-lg shadow-md m-5">
      <h2 className="text-2xl font-bold mb-6">Informations personnels</h2>
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full mr-6 w-24 h-24 object-cover"
        />
          <div>
            <p className="mb-2"><strong className="mr-3">Nom :</strong> {profile?.name}</p>
            <p className="mb-2"><strong className="mr-3">Email :</strong> {profile?.email}</p>
            <p className="mb-2"><strong className="mr-3">Addresse:</strong> Analamahitsy Cité lgmnt 242</p>
            <p className="mb-2"><strong className="mr-3">Nombre de points :</strong> 1500</p>
          </div>
      </div>
    </div>
  );
};

const ProfileApp = () => {
  // const nav = useNavigate();
  // useEffect(() => {
  //   if (CurrentUserInfo().role != "USER" || CurrentUserInfo().role != "ADMIN") {
  //     nav("/");
  //   }
  // }, []);

  return (
    <div className="bg-[#f1f1f1] flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <Header title={"Mon profile"} />
        <Profile />
        <DashboardChart />
      </main>
    </div>
  );
};

export default ProfileApp;
