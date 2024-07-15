import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';

function App() {
  const[tasks, setTasks] = useState([
    {id:1, text:'Apointment', date:'July 20, 2024 at 1pm', reminder:true},
    {id:1, text:'School', date:'July 24, 2024 at 10am', reminder:false},
    {id:1, text:'Clean', date:'July 23, 2024 at 12pm', reminder:true},
  ]);
  
  return (
    <div className="container">
      <Header title="ToDo List"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
