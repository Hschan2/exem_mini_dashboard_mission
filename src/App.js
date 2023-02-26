import './App.css';

function App() {
  fetch('/pie')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log("에러: ", error);
    });

  return (
    <div className="App">
      안녕
    </div>
  );
}

export default App;
