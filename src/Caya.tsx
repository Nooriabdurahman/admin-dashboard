import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "18-24", value: 20, color: "#8A75D1" },
  { name: "25-34", value: 30, color: "#8FC89A" },
  { name: "35-44", value: 25, color: "#F5B455" },
  { name: "45-54", value: 15, color: "#F97B48" },
  { name: "55+", value: 10, color: "#1E90FF" },
];

const Dashboard = () => {
  return (
  
      <div className="bg-[#1A2332] p-6 rounded-xl shadow-lg  border border-gray-700 w-full col-span-2 fle">
        <h2 className="text-white text-xl font-semibold mb-4">User Demographics</h2>
        <div className="flex items-center justify-center  w-[100%]">
        <PieChart width={400} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label={({ name, percent }) => `${name} ${Math.round(percent * 100)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
        </div>
      </div>
  );
};

export default Dashboard;

