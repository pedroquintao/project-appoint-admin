import React from 'react'
import axios from 'axios'
import styles from './Page.module.scss'
import Display from './Display'
import ButtonAddTask from './ButtonAddTask'
import TaskList from './TaskList'
import SearchBar from './SearchBar'
import ControlPanel from './ControlPanel'
import { useState, useEffect } from 'react'

export default function Page() {

  const [taskList, setTaskList] = useState([])

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
  
  useEffect(() => { getTaskList(); }, []);

  return (
        <div className={styles.content}>
            <Display />
            <ControlPanel />
            <div className={styles.content__addAndSearch}>
              <ButtonAddTask getTaskList={getTaskList} />
              <SearchBar />
            </div>
            <TaskList taskList={taskList} />
        </div>
  )
}
