import { useEffect } from 'react';
import DashboardChart from '../../../components/Dashboard/DashboardChart';
import { useNavigate } from 'react-router-dom';
import CurrentUserInfo from '../../../utils/token';

const Dashboard = () => {
  const nav = useNavigate();
  useEffect(() => {
    if (CurrentUserInfo().role != "ADMIN") {
      nav("/home");
    } else if (CurrentUserInfo().role != "USER") {
      nav("/");
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      < DashboardChart />
    </div>
  );
};

export default Dashboard;
