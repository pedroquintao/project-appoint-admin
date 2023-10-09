import React from "react";
import styles from './TaskInputContent.module.scss'
export default function TaskInputContent({name, time}) {
    return (
        <div className={styles.taskbar__taskInfo__entradas}>
            <input className={styles.taskbar__taskInfo__inputName} type='text' value={name}/>
            <input className={styles.taskbar__taskInfo__inputPlannedTime} type='time' step='1' value={`${time.hours}:${time.minutes}:${time.seconds}`} />
        </div>
    )
}