import { useEffect } from 'react';
import DashboardChart from '../../../components/Dashboard/DashboardChart';
import { useNavigate } from 'react-router-dom';
import CurrentUserInfo from '../../../utils/token';

const Dashboard = () => {
  const nav = useNavigate();
  useEffect(() => {
    const role = CurrentUserInfo().role;
    if (role != "ADMIN") {
      nav("/home");
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      < DashboardChart />
    </div>
  );
};

export default Dashboard;
