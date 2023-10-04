import React from 'react'
import Task from './Task'
import styles from './TaskList.module.scss'


export default function TaskList({taskList}) {
  
  return (
    <ul className={styles.listarea}>
        {taskList.map(task => <Task __id={task.id} name={task.name} plannedTime={task.plannedTime}/>)}
    </ul>
  )
}
