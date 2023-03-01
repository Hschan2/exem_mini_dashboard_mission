import GetPieChart from './components/GetPieChart';
import './App.css';
import GetLineChart from './components/GetLineChart';
import GetValueChart from './components/GetValueChart';
import { useState } from 'react';

function App() {
  const [selectedTime, setSelectedTime] = useState(10);

  const handleTimeChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    setSelectedTime(Number(value));
  }

  return (
    <div className="App">
      <h1 className='banner'>EXEM MINI DASHBOARD</h1>
      <div className='selectContainer'>
        <span className='selectLabel'>시간을 선택해주세요. (예. 10분 전부터 현재 시간까지)</span>
        <select value={selectedTime} onChange={handleTimeChange} className="selectedTime">
          <option hidden>시간 선택</option>
          <option value="10">10분</option>
          <option value="30">30분</option>
          <option value="60">1시간</option>
        </select>
      </div>
      
      <GetPieChart selectedTime={selectedTime} />
      <GetLineChart selectedTime={selectedTime} />
      <GetValueChart selectedTime={selectedTime} />
      <style jsx="true">{`
        .banner {
          padding: 30px 0 30px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          background-color: #1D1C1A;
          color: #FAF8F6;
        }
        .selectContainer {
          margin: 20px 0 20px 0;
        }
        .selectLabel {
          padding: 0 10px; 0 10px;
          font-size: 12px;
        }
        .selectedTime {
          padding: 5px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

export default App;
