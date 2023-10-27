import React from 'react'
import styles from './Task.module.scss'
import ButtonTaskMenu from './ButtonTaskMenu'
import { useState } from 'react'

export default function Task({task}) {

  const hours = task.plannedTime.hours < 10? `0${task.plannedTime.hours}` : `${task.plannedTime.hours}`
  const minutes = task.plannedTime.minutes < 10? `0${task.plannedTime.minutes}` : `${task.plannedTime.minutes}`
  const seconds = task.plannedTime.seconds < 10? `0${task.plannedTime.seconds}` : `${task.plannedTime.seconds}`
  
  const [editModeOn, setEditModeOn] = useState(false)
  const toggleEditMode = () => {setEditModeOn(!editModeOn)}

  return (
    <div className={styles.content}>
      {!editModeOn? (
        <>
          <p className={styles.content__taskName} >{task.name}</p>
          <p className={styles.content__taskPlannedTime} >{hours} : {minutes} : {seconds} </p>
        </>
      ) : (
        <>
          <input type='text' className={styles.content__taskName} />
          <input type='time' step={1} className={styles.content__taskPlannedTime} />
        </>
      )}
        
        <ButtonTaskMenu editModeOn={editModeOn} toggleEditMode={toggleEditMode}/>
    </div>
  )
}
