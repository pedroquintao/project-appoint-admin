import React from 'react'
import styles from './Task.module.scss'
import TaskOptions from './TaskOptions'

export default function Task({__id, name, plannedTime}) {

  let hours = '', minutes = '', seconds = '';
  
  plannedTime.hours < 10? hours = `0${plannedTime.hours}` : hours = `${plannedTime.hours}`;
  plannedTime.minutes < 10? minutes = `0${plannedTime.minutes}` : minutes = `${plannedTime.minutes}`;
  plannedTime.seconds < 10? seconds = `0${plannedTime.seconds}` : seconds = `${plannedTime.seconds}`

  return (
    <li className={styles.taskbar}>
      <div className={styles.taskbar__taskInfo}>
        <p className={styles.taskbar__taskInfo__name}>{name}</p>
        <p className={styles.taskbar__taskInfo__finalTime}>{hours} : {minutes} : {seconds}</p>
      </div>
      <TaskOptions __id={__id}/>
    </li>
  )
}
