import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { CURRENT_TIME, TEN_MINUTES_AGO } from '../constants/time';
import useInterval from './useInterval';

function GetPieChart() {
    const [pieData, setPieData] = useState([]);
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    const fetchData = async () => {
        const response = await fetch(`/pie?from=${TEN_MINUTES_AGO}&to=${CURRENT_TIME}`);
        const data = await response.json();
        setPieData(data.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useInterval(() => {
        fetchData();
    }, 10000)

    return (
        <div className='pieChartContainer'>
            <PieChart width={500} height={300} className="pieChart">
                <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={({ name, value }) => `${name}(${value}%)`}
                >
                    {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <style jsx="true">{`
                .pieChartContainer {
                    display: flex;
                    justify-content: center;
                }
                .pieChart {
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    border-radius: 20px;
                    padding: 0 30px;
                }
            `}</style>
        </div>
    )
}

export default GetPieChart