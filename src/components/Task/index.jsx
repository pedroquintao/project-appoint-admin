import React from 'react'
import styles from './Task.module.scss'


export default function Task({name, finalTime}) {
  return (
    <li className={styles.taskbar}>
        <p>{name}</p>
        <p>{finalTime}</p>
    </li>
  )
}
