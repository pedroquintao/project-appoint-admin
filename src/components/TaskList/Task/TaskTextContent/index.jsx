import React from 'react'
import styles from './TaskTextContent.module.scss'

export default function TaskTextContent({name, time}) {
  return (
    <div className={styles.textContent}>
        <p className={styles.textContent__name}>{name}</p>
        <div className={styles.textContent__time}>
            {time.hours} :
            {time.minutes} : 
            {time.seconds}
        </div>
    </div>
  )
}
