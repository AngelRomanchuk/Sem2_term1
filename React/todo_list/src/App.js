import './App.css';
import Header from './Components/Header';
import Tasks from './Components/Tasks';

function App() {
  
  return (
    <div className="container">
      <Header title="ToDo List"/>
      <Tasks />
    </div>
  );
}

export default App;
