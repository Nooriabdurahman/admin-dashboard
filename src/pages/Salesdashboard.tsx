import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 4500 },
  { name: "Apr", sales: 4200 },
  { name: "May", sales: 6000 },
  { name: "Jun", sales: 5500 },
  { name: "Jul", sales: 7000 },
];

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("This Week");

  return (
    <div className="  pb-8 min-h-screen text-white grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-800 p-6 border border-gray-700 rounded-lg shadow-lg col-span-1 md:col-span-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Sales Overview</h2>
          <select
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip wrapperClassName="bg-gray-800 text-white p-2 rounded-md" />
            <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#4c3c8d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;