import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

function GetPieChart() {
    const [pieData, setPieData] = useState([]);
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/pie?from=1677078000&to=1677081600');
        const data = await response.json();
        setPieData(data.data);
      };
      fetchData();
    }, []);

    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={({ name, value }) => `${name}(${value})`}
                >
                    {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}

export default GetPieChart