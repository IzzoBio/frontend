import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', kilos: 30 },
  { month: 'Feb', kilos: 45 },
  { month: 'Mar', kilos: 60 },
  { month: 'Apr', kilos: 50 },
  { month: 'May', kilos: 70 },
  { month: 'Jun', kilos: 90 },
  { month: 'Jul', kilos: 100 },
  { month: 'Aug', kilos: 85 },
  { month: 'Sep', kilos: 95 },
  { month: 'Oct', kilos: 110 },
  { month: 'Nov', kilos: 120 },
  { month: 'Dec', kilos: 130 },
];

const DashboardChart = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg mt-10 m-5">
      <h2 className="text-xl font-bold mb-4">Suivi des Kilos de Fako</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="kilos" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;