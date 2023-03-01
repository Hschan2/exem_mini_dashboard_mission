import { FROM, TO } from "../constants/time";

const fetchData = async (urlLink, setData) => {
    const response = await fetch(`/${urlLink}?from=${FROM}&to=${TO}`);
  
    try {
        const data = await response.json();
        if (urlLink === 'value') setData(data);
        else if (urlLink === 'pie') setData(data.data);
        else if (urlLink === 'timeseries') {
            const chartData = data.times.map((time, index) => ({
                time: new Date(time).toLocaleTimeString(),
                value: data.data[index],
            }));
            setData(chartData);
        }
    } catch (error) {
      console.error(error);
    }
 };

export default fetchData