import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

// Define the type for the data array
interface DataItem {
  name: string;
  value: number;
}

const data: DataItem[] = [
  { name: "Electronics", value: 31 , },
  { name: "Clothing", value: 22 ,  },
  { name: "Home & Garden", value: 19 , },
  { name: "Books", value: 14,  },
  { name: "Sports & Outdoors", value: 13,  },
];

// Define the type for the COLORS array
const COLORS: string[] = ["#3B82F6", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

// Define the type for the renderCustomizedLabel function
interface LabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  index,
}: LabelProps) => {
  const radius = outerRadius + 20;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={COLORS[index]}
      fontSize={14}
      fontWeight="bold"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${data[index].name} ${Math.round(percent * 100)}%`}
    </text>
  );
};

// Define the type for the CustomPieChart component
const CustomPieChart: React.FC = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 flex flex-col items-center">
      <h2 className="text-lg font-medium mb-4 text-gray-100">Category Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((_item, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend className="mt-[100px]" verticalAlign="bottom" align="center" iconType="square" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;