import React, { useEffect, useState } from 'react'

function GetValueChart() {
    const [valueData, setValueData] = useState([]);

    useEffect(() => {
        fetch('/value?from=1677081600&to=1677082200')
            .then(response => response.json())
            .then(data => setValueData(data))
            .catch(error => console.error(error));
    }, []);
  
    return (
        <div className='valueChartContainer'>
            <p className='valueChart'>{valueData.value}<span className='valueUnit'>ms</span></p>
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