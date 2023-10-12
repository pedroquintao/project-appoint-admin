import React from 'react'
import styles from './Task.module.scss'
import TaskOptions from './TaskOptions'
import { useState } from 'react';
import TaskTextContent from './TaskTextContent';
import TaskInputContent from './TaskInputContent';

export default function Task({__id, name, plannedTime}) {

  let normalizeTimeInput = (time) => {
    let hours = '', minutes = '', seconds = '';
  
    time.hours < 10? hours = `0${time.hours}` : hours = `${time.hours}`;
    time.minutes < 10? minutes = `0${time.minutes}` : minutes = `${time.minutes}`;
    time.seconds < 10? seconds = `0${time.seconds}` : seconds = `${time.seconds}`

    return ({
            hours: hours, 
            minutes: minutes, 
            seconds: seconds
            })
  }
  let time = normalizeTimeInput(plannedTime)
  
  const [isEditModeOn, setIsClicked] = useState(false);

    const toggleEditMode = () => {setIsClicked(!isEditModeOn);}

  return (
    <>
      <li className={styles.taskbar}>
        {!isEditModeOn? 
          <TaskTextContent name={name} time={time}/> : 
          <TaskInputContent name={name} time={time}/> }
          <TaskOptions __id={__id} toggleEditMode={toggleEditMode} isEditModeOn={isEditModeOn}/>
      </li>
    </>
  )
}
