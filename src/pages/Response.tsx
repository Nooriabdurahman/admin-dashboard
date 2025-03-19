import { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {
  state = {
    data: [
      { name: 'Website', value: 4500, id: Number },
      { name: 'Mobile App', value: 4000, id : Number },
      { name: 'Marketplace', value: 2500, id : Number },
      { name: 'Social Media', value: 2000, id: Number },
    ],
  };

  render() {
    const { data } = this.state;
    const colors = ['#4a90e2', '#a77ed7', '#ff6f91', '#4bc0c0']; // Blue, Purple, Pink, Green

    return (
        <div 
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 flex flex-col items-center w-full col-span-2">
      <div style={{ width: '100%' }}>
        <h3 style={{ textAlign: 'left', marginBottom: '10px' }}>Sales by Channel</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value">
              {data.map(({ id }, index) => (
                <Cell key={`cell-${id}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div> 
      </div>
    );
  }
}
