import React from 'react'
import styles from './Task.module.scss'
import ButtonTaskMenu from './ButtonTaskMenu'
import { useState } from 'react'

export default function Task({task, getTaskList}) {
  
  const normalizeTime = (time) => {
    const hours = time.hours < 10? `0${time.hours}` : `${time.hours}`
    const minutes = time.minutes < 10? `0${time.minutes}` : `${time.minutes}`
    const seconds = time.seconds < 10? `0${time.seconds}` : `${time.seconds}`

    return [hours, minutes, seconds]
  }

  const [hours, minutes, seconds] = normalizeTime(task.plannedTime)
  
  const [editModeOn, setEditModeOn] = useState(false)
  const toggleEditMode = () => {setEditModeOn(!editModeOn)}

  const [formData, setFormData] = useState(task)

  const changeName = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const changePlannedTime = (e) => {
    const {name, value} = e.target;

    const [hours, minutes, seconds] = value.split(':')

    setFormData({...formData, [name]: {
                                       hours: hours, 
                                       minutes: minutes, 
                                       seconds: seconds
                                      }
                                    })
                                  }

  return (
    <div className={styles.content}>
      {!editModeOn? (
        <>
          <p className={styles.content__taskName} >{task.name}</p>
          <p className={styles.content__taskPlannedTime} >{hours} : {minutes} : {seconds} </p>
        </>
      ) : (
        <>
          <input className={styles.content__inputName} type='text' name='name' onChange={changeName}/>
          <input className={styles.content__inputPlannedTime} type='time' name='plannedTime' step={1} onChange={changePlannedTime} />
        </>
      )}
        <ButtonTaskMenu editModeOn={editModeOn} toggleEditMode={toggleEditMode} formData={formData} getTaskList={getTaskList}/>
    </div>
  )
}
