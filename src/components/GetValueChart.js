import React, { useEffect, useState } from 'react'
import { FROM, TO } from '../constants/time';
import useInterval from './useInterval';

function GetValueChart() {
    const [valueData, setValueData] = useState([]);

    const fetchData = async () => {
        return await fetch(`/value?from=${FROM}&to=${TO}`)
            .then(response => response.json())
            .then(data => setValueData(data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetchData();
    }, []);

    useInterval(() => {
        fetchData();
    }, 10000)
  
    return (
        <div className='valueChartContainer'>
            <p className='valueChart'>{valueData.value}<span className='valueUnit'>mib</span></p>
            <style jsx="true">{`
                .valueChartContainer {
                    display: flex;
                    justify-content: center;
                    margin-top: 10px;
                }
                .valueChart {
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    border-radius: 20px;
                    padding: 30px;
                    font-size: 80px;
                    font-weight: bold;
                }
                .valueUnit {
                    font-size: 20px;
                    font-weight: normal;
                }
            `}</style>
        </div>
    )
}

export default GetValueChart