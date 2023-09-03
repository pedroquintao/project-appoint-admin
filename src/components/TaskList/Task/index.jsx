import React from 'react'
import styles from './Task.module.scss'
import TaskOptions from './TaskOptions'

export default function Task({name, finalTime}) {
  return (
    <li className={styles.taskbar}>
      <div className={styles.taskbar__taskInfo}>
        <p className={styles.taskbar__taskInfo__name}>{name}</p>
        <p>{finalTime}</p>
      </div>
      <TaskOptions />
    </li>
  )
}
