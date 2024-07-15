import React from 'react'
import { GoCheckCircle } from "react-icons/go";

const Task = ({task}) => {
  return (
    <div className='task'><GoCheckCircle style={{marginRight: "10px"}}/>{task.text}</div>
  )
}

export default Task
