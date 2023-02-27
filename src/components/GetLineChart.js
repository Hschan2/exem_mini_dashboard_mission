import React, { useEffect, useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

function GetLineChart() {
    const [lineData, setLineData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/timeseries?from=1677078000&to=1677081600');
            const data = await response.json();
            const chartData = data.times.map((time, index) => ({
                time: new Date(time).toLocaleTimeString(),
                value: data.data[index],
              }));
            setLineData(chartData);
        };
        fetchData();
    }, []);

    return (
        <div>
            <LineChart width={800} height={400} data={lineData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    )
}

export default GetLineChart