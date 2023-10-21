import React from 'react'
import styles from './Task.module.scss'
import TaskOptions from './TaskOptions'
import { useState } from 'react';
import TaskTextContent from './TaskTextContent';
import TaskInputContent from './TaskInputContent';

export default function Task({task}) {

  const name = task.name,
        plannedTime = task.plannedTime;

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

  const time = normalizeTimeInput(plannedTime)
  
  const [inputName, setInputName] = useState(name)

  const [inputTime, setInputTime] = useState(time)
  
  const [isEditModeOn, setIsClicked] = useState(false);

  const toggleEditMode = () => {setIsClicked(!isEditModeOn);}

  const changeInputName = (e) => {setInputName(e.target.value); console.log('inputName: ', inputName)}

  const changeInputTime = (e) => {setInputTime(e.target.value); console.log('inputTime: ', inputTime);}

  return (
    <>
      <li className={styles.taskbar}>
        {!isEditModeOn? 
          <TaskTextContent name={name} time={time}/> : 
          <TaskInputContent inputName={inputName} inputTime={inputTime} changeInputName={changeInputName} changeInputTime={changeInputTime}/> }
          <TaskOptions task={task} toggleEditMode={toggleEditMode} isEditModeOn={isEditModeOn}/>
      </li>
    </>
  )
}
