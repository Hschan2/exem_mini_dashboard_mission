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
        <div>
            <p>Name: {valueData.name}</p>
            <p>Unit: {valueData.unit}</p>
            <p>Value: {valueData.value}</p>
        </div>
    )
}

export default GetValueChart