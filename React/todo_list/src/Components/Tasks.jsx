import React from 'react'

const tasks = [
    {id:1, text:'Apointment', date:'July 20, 2024 at 1pm', reminder:true},
    {id:1, text:'School', date:'July 24, 2024 at 10am', reminder:false},
    {id:1, text:'Clean', date:'July 23, 2024 at 12pm', reminder:true}
];
const Tasks = () => {
  return (
    <>
        {tasks.map((tasks)=>(<h3 key={tasks.id}>{tasks.text}</h3>))}
    </>
  );
}

export default Tasks
