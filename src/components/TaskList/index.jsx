import React from 'react'
import Task from '../Task'

export default function TaskList({taskList}) {
  return (
    <ul className='task-list'>
        {taskList.map(task => <Task name={task.name} finalTime={task.finalTime}/>)}
    </ul>
  )
}
