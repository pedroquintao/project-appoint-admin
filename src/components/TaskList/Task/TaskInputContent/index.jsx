import React from "react";
import styles from './TaskInputContent.module.scss'
export default function TaskInputContent({inputName, inputTime, changeInputName, changeInputTime}) {

    const teste = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className={styles.inputContent}>
            <input  className={styles.inputContent__name} 
                    type='text' 
                    value={inputName} 
                    onChange={changeInputName}
                    />
            <input  className={styles.inputContent__time} 
                    type='time' 
                    step='1' 
                    value={`${inputTime.hours}:${inputTime.minutes}:${inputTime.seconds}`} 
                    onChange={changeInputTime}
                    />
        </div>
    )
}