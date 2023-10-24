import React from 'react'
import styles from './TaskList.module.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Task from './Task'


export default function TaskList() {

  const testTaskList = [
      { 
      name: 'This is a Test',
      plannedTime: {
                  hours: 0,
                  minutes: 0,
                  seconds: 0
                }
      }
    ]

  const postTaskTest = 
    { 
    name: 'TEST',
    plannedTime: {
                hours: 0,
                minutes: 0,
                seconds: 0
              }
    }
    

  const [taskList, setTaskList] = useState(testTaskList)
  
  const getTaskList = () => {
    axios.get('http://localhost:8080/task')
    .then(response => {
      setTaskList(response.data)
      console.log('Recived data: ', response.data)
    })
    .catch((error) => {
      console.error('GET request error: ', error);
    })
    .finally('GET request is done')
  }

  const postTaskList = async () => {
    axios.post('http://localhost:8080/task', postTaskTest)
    .then(response => console.log('RESPONSE: ', response.data))
    .catch(error => console.log('ERROR: ',error))
  }


  useEffect(() => { getTaskList(); }, []);

  return (
    <div className={styles.content}>
      {taskList.map(task => <Task key={task.name} task={task} />)}
    </div>
  )
}
