import React from 'react'
import styles from './Task.module.scss'
import TaskOptions from './TaskOptions'

export default function Task({name, finalTime}) {
  return (
    <li className={styles.taskbar}>
        <p className={styles.taskbar__name}>{name}</p>
        <p>{finalTime}</p>
        <TaskOptions />
    </li>
  )
}
