import './App.css';
import About from "./components/About";

function App() {
  let name = "Alan"
  return (
    <>
      <div className="App">
        <h1>My first project - {name}</h1>
      </div>
      <div className="App">
        <About />
      </div>
    </>
  );
}

export default App;
