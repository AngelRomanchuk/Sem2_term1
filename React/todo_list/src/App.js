import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from './Components/About';
import TaskDetails from './Components/TaskDetails';

function App() {
  const[tasks, setTasks] = useState([]);

  const[showAddTask, setShowAddTask] = useState(false);

  // To Delete A Task
  const deleteTask = async (id) => {
    // bring the task with given id
    await fetch(`http://localhost:5000/tasks/${id}`, {method:"DELETE"});

    setTasks(tasks.filter((task)=>task.id !== id));
  };

  // To Toggle Reminder true or false
  const toggleReminder= async (id)=>{
    const taskToToggle = await fetchTask(id);
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {method: 'PUT', 
      headers: {
      "Content-type":"application/json",
      },
      body: JSON.stringify(updTask),
    })

    setTasks(tasks.map((task) => task.id === id ? {...task,reminder : !task.reminder} : task));
  };

  // To Add Task
  const addTask = async (task) => {
    // console.log(task);

    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST", 
      headers: {
        "Content-type":"application/json",
      }, 
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    // const id=Math.floor(Math.random()*1000)+1;
    // const newTask = {id, ...task}; // create new task and embed id with it
    // setTasks([...tasks,newTask]);
  };

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }


  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Main what to show on page
  return (
    <Router>
      <div className="container">
        <Link to='/contact'>Contact</Link> | 
        <Link to='/'>Home</Link> | 
        <Link to='/about'>About</Link> | 
        <Header title="ToDo List" onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        <Routes>
          <Route path='/' element={
            <>
              {showAddTask && <AddTask onAdd={addTask}/>}

              {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):("No tasks to show")}
            </>
          } />
        
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/task/:id' element={<TaskDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
