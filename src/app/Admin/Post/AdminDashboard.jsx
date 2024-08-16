import { useEffect } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Header from "../../../components/Header/Header";
import List from "../../UserList/UserList";
import DashboardChart from "../../../components/Dashboard/DashboardChart";
import { useNavigate } from "react-router-dom";
import CurrentUserInfo from "../../../utils/token";

const AdminDashboard = () => {
  const nav = useNavigate();
  useEffect(() => {
    if (CurrentUserInfo().role != "ADMIN") {
      nav("/home");
    } else if (CurrentUserInfo().role != "USER") {
      nav("/");
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-[#f3f3f3]">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        <DashboardChart />
        <List />
      </main>
    </div>
  );
};
export default AdminDashboard;
