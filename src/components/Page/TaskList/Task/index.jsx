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

  const [deleteModeOn, setDeleteMode] = useState(false)
  const toggleDeleteMode = () => {setDeleteMode(!deleteModeOn)}

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

  <li className={styles.content} onClick={(e) => console.log(e.target.className, styles.content)}>
      {!editModeOn? (
        <>
          <p className={styles.content__taskName} >{task.name}</p>
          <p className={styles.content__taskPlannedTime} >{hours} : {minutes} : {seconds} </p>
        </>
      ) : (
        <>
          <input className={styles.content__inputName} type='text' 
                                                       name='name' 
                                                       value={formData.name}
                                                       onChange={changeName}/>

          <input className={styles.content__inputPlannedTime} type='time' 
                                                              name='plannedTime'
                                                              value={`${hours}:${minutes}:${seconds}`}
                                                              step={1} 
                                                              onChange={changePlannedTime} />
        </>
      )}
        <ButtonTaskMenu editModeOn={editModeOn}
                        deleteModeOn={deleteModeOn} 
                        toggleEditMode={toggleEditMode} 
                        toggleDeleteMode={toggleDeleteMode}
                        formData={formData} getTaskList={getTaskList}
                        taskClassName={styles.content}/>
  </li>
  )
}
