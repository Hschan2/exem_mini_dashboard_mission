import React, { useEffect, useState } from 'react'
import GetFetchData from './getFetchData';
import useInterval from './useInterval';

function GetValueChart({selectedTime}) {
    const [valueData, setValueData] = useState([]);

    useEffect(() => {
        GetFetchData('value', setValueData, selectedTime);
    }, []);

    useInterval(() => {
        GetFetchData('value', setValueData, selectedTime);
    }, 10000)
  
    return (
        <div className='valueChartContainer'>
            <p className='valueChart'>{valueData.value}<span className='valueUnit'>mib</span></p>
            <style jsx="true">{`
                .valueChartContainer {
                    display: flex;
                    justify-content: center;
                    margin: 90px 0 10px 0;
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