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
import { currentTime, tenMinutesAgo } from '../constants/time';
import useInterval from './useInterval';

function GetLineChart() {
    const [lineData, setLineData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`/timeseries?from=${tenMinutesAgo}&to=${currentTime}`);
        const data = await response.json();
        const chartData = data.times.map((time, index) => ({
            time: new Date(time).toLocaleTimeString(),
            value: data.data[index],
          }));
        setLineData(chartData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useInterval(() => {
        fetchData();
    }, 10000)

    return (
        <div className='lineChartContainer'>
            <LineChart width={800} height={400} data={lineData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }} className='lineChart'>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
            <style jsx="true">{`
                .lineChartContainer {
                    display: flex;
                    justify-content: center;
                    margin-top: 10px;
                    margin-bottom: -80px;
                }
                .lineChart {
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    border-radius: 20px;
                    padding: 30px;
                }
            `}</style>
        </div>
    )
}

export default GetLineChart