import React from 'react'
import styles from './TaskTextContent.module.scss'

export default function TaskTextContent({name, time}) {
  return (
    <div>
        <p className={styles.taskbar__taskInfo__infoName}>{name}</p>
            <p className={styles.taskbar__taskInfo__infoFinalTime}>
                <p>{time.hours}</p> :
                <p>{time.minutes}</p> : 
                <p>{time.seconds}</p>
        </p>
    </div>
  )
}
