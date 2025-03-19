
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { month: 'Jan', users: 1500 },
  { month: 'Feb', users: 1800 },
  { month: 'Mar', users: 2500 },
  { month: 'Apr', users: 3000 },
  { month: 'May', users: 4500 },
  { month: 'Jun', users: 6000 },
];

const UserGrowthChart = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 w-full h-[400px]'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className='text-xl font-semibold text-white mb-4'>User Growth</h2>
      <div className='w-full h-[320px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3 3' stroke='#444' />
            <XAxis dataKey='month' stroke='#888' />
            <YAxis stroke='#888' />
            <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none', color: '#fff' }} cursor={{ stroke: '#666' }} />
            <Line
              type='monotone'
              dataKey='users'
              stroke='#a855f7'
              strokeWidth={2}
              dot={{ r: 6, fill: '#a855f7', stroke: '#a855f7' }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserGrowthChart;