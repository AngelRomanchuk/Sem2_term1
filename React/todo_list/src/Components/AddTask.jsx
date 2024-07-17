import React from 'react'
import { useState } from 'react';

const AddTask = ({onAdd}) => {
  const[text, setText] = useState('');
  const[date, setDate] = useState('');
  const[reminder, setReminder] = useState(false);

  const onSubmit=(e)=>{
    e.preventDefault();

    if(!text) {
        alert('Please add task!')
        return;
    }

    onAdd({text, date, reminder});

    setText('');
    setDate('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type="text" placeholder='Add task here' value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Date</label>
            <input type="text" placeholder='Add date here' value={date} onChange={(e)=>setDate(e.target.value)}/>
        </div>
        <div className='form-control-check'>
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.value)}/>
        </div>
        <input type="submit" value='Save Task'className='btn'/>
    </form>
  )
}

export default AddTask
