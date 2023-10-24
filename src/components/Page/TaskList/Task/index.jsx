import React from 'react'
import styles from './Task.module.scss'

export default function Task({task}) {
  return (
    <div className={styles.content}>
        <p>{task.name}</p>
        <p>{task.plannedTime.hours} : {task.plannedTime.minutes} : {task.plannedTime.seconds} </p>
    </div>
  )
}
