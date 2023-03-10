import { FROM, TO } from "../constants/time";

const fetchData = async (urlLink, setData, selected) => {
    const fromTime = FROM;
    const toTime = TO(selected);
    const response = await fetch(`/${urlLink}?from=${fromTime}&to=${toTime}`);
  
    try {
        if (response.ok) {
            const data = await response.json();
            if (urlLink === 'value') {
                setData(data);
            }
            else if (urlLink === 'pie') {
                setData(data.data || []);
            }
            else if (urlLink === 'timeseries') {
                const chartData = data.times.map((time, index) => ({
                    time: new Date(time).toLocaleTimeString(),
                    value: data.data[index],
                }));
                setData(chartData);
            }
        } else {
            throw new Error('API 요청의 응답에 실패하였습니다.');
        }
    } catch (error) {
        console.error(error);
    }
 };

export default fetchData