import React from 'react';
import Header from '../../../components/Header/Header';
import DashboardChart from '../../../components/Dashboard/DashboardChart';
import SidebarAdmin from '../SidebarAdmin';

const AdminDashboard = () => {
    return (
        <div className="flex min-h-screen bg-[#f3f3f3]">
            <SidebarAdmin />
            <main className="flex-1">
                <Header title={"Tableau de bord"} />
                <div className='m-5'>
                    <DashboardChart />
                </div>
            </main>
        </div>
    );
};
export default AdminDashboard;
