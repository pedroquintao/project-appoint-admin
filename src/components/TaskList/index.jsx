import React from 'react'
import Task from './Task'
import styles from './TaskList.module.scss'


export default function TaskList({taskList}) {
  
  return (
    <ul className={styles.listarea}>
        {taskList.map(task => <Task task={task} />)}
    </ul>
  )
}
