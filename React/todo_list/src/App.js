import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';

function App() {
  const[tasks, setTasks] = useState([
    {id:1, text:'Apointment', date:'July 20, 2024 at 1pm', reminder:true},
    {id:2, text:'School', date:'July 24, 2024 at 10am', reminder:false},
    {id:3, text:'Clean', date:'July 23, 2024 at 12pm', reminder:true},
  ]);

  // To Delete A Task
  const deleteTask = (id) => {
    // console.log("delete", id);
    setTasks(tasks.filter((task) => task.id != id)) // Match ids and if it is found it is filtered that task (deletes it)
  };

  // To Toggle Reminder true or false
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder : !task.reminder} : task))
  }
  

  // Main what to show on page
  return (
    <div className="container">
      <Header title="ToDo List"/>

      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):("No tasks to show")}
    </div>
  );
}

export default App;
