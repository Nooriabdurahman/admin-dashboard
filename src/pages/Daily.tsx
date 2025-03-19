import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const Salesdashboard = () => {
  // Sample data for the daily sales trend
  const data = [
    { name: "Mon", sales: 1000 },
    { name: "Tue", sales: 1200 },
    { name: "Wed", sales: 800 },
    { name: "Thu", sales: 900 },
    { name: "Fri", sales: 1400 },
    { name: "Sat", sales: 1600 },
    { name: "Sun", sales: 1500 },
  ];

  return (
    <motion.div
      className="bg-[#1e2939] p-6 rounded-xl shadow-lg border border-gray-700 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-white text-xl font-semibold mb-4 text-left">Daily Sales Trend</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
                color: "#E5E7EB",
              }}
            />
            <Bar dataKey="sales" fill="#10B981" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default Salesdashboard;