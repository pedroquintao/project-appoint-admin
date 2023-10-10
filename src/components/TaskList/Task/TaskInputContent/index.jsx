import React from "react";
import styles from './TaskInputContent.module.scss'
export default function TaskInputContent({name, time}) {
    return (
        <div className={styles.inputContent}>
            <input className={styles.inputContent__name} type='text' value={name}/>
            <input className={styles.inputContent__time} type='time' step='1' value={`${time.hours}:${time.minutes}:${time.seconds}`} />
        </div>
    )
}