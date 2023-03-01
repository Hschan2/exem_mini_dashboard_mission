import GetPieChart from './components/GetPieChart';
import './App.css';
import GetLineChart from './components/GetLineChart';
import GetValueChart from './components/GetValueChart';
import { useState } from 'react';

function App() {
  const [selectedTime, setSelectedTime] = useState(10);

  const handleTimeChange = (event) => {
    const { value } = event.target;

    setSelectedTime(value);
  }

  return (
    <div className="App">
      <h1>EXEM MINI DASHBOARD</h1>
      <select value={selectedTime} onChange={handleTimeChange} className="selectedTime">
        <option hidden>시간 선택</option>
        <option value="10">10분</option>
        <option value="30">30분</option>
        <option value="60">1시간</option>
      </select>
      <GetPieChart selectedTime={selectedTime} />
      <GetLineChart selectedTime={selectedTime} />
      <GetValueChart selectedTime={selectedTime} />
      <style jsx="true">{`
        .selectedTime {
          padding: 5px;
          margin-bottom: 20px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

export default App;
