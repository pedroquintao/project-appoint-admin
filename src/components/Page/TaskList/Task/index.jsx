import React from 'react'
import styles from './Task.module.scss'

export default function Task({task}) {

  const hours = task.plannedTime.hours < 10? `0${task.plannedTime.hours}` : `${task.plannedTime.hours}`
  const minutes = task.plannedTime.minutes < 10? `0${task.plannedTime.minutes}` : `${task.plannedTime.minutes}`
  const seconds = task.plannedTime.seconds < 10? `0${task.plannedTime.seconds}` : `${task.plannedTime.seconds}`

  return (
    <div className={styles.content}>
        <p>{task.name}</p>
        <p>{hours} : {minutes} : {seconds} </p>
    </div>
  )
}
