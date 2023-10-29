 import React from 'react'
import styles from './TaskList.module.scss'
import Task from './Task'


export default function TaskList({taskList, getTaskList}) {

  return (
    <div className={styles.content}>
      {taskList.map((task) => <Task key={task.id} task={task} getTaskList={getTaskList}/>)}
    </div>
  )
}
