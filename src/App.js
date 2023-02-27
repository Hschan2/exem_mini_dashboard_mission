import GetPieChart from './components/GetPieChart';
import './App.css';
import GetLineChart from './components/GetLineChart';
import GetValueChart from './components/GetValueChart';

function App() {

  return (
    <div className="App">
      <h1>EXEM_MINI_DASHBOARD</h1>
      <GetPieChart />
      <GetLineChart />
      <GetValueChart />
    </div>
  );
}

export default App;
