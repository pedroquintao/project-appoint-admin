import { useState, useEffect } from 'react'
import styles from './App.module.scss'
import React from 'react'
import SearchBar from './components/SearchBar'
import AddTaskButton from './components/AddTaskButton'
import TaskList from './components/TaskList'
import TimerDisplay from './components/TimerDisplay'
import TimerControl from './components/TimerControl'
import TimerLog from './components/TimerLog'
import Header from './components/Header'
import Footer from './components/Footer'
import { BsStopwatch } from 'react-icons/bs'

var TestTaskList = [
  {
  name: '',
  plannedTime: {
              hours: 0,
              minutes: 0,
              seconds: 0
            }
  }
]

function App() {
  
  const [tasks, setTasks] = useState(TestTaskList)
  
  const getTaskList = async () => {

    try {
      const response = await fetch('http://localhost:8080/task');
      
      if (!response.ok) {
        throw new Error('Erro ao buscar task');
      }

      const data = await response.json();
      console.log('data: ', data)
      // const newTasks = data.map( element => element = {
      //                                                 id: element.id,
      //                                                 name: element.name, 
      //                                                 plannedTime: element.plannedTime})
              
      setTasks(data);
    } 
    
    catch (error) {
      console.error('Erro:', error);
    }

    finally {
      console.log('%cApp.jsx line:54 tasks', 'color: #007acc;', tasks);
    }
  }

  useEffect(() => {

    getTaskList();
    
  }, []);

  return (

    <div className={styles.page}>
      <section className={styles.header}>
        <Header />
      </section>
      <div className={styles.content}>
        <section className={styles.content__task}>
          <BsStopwatch className={styles.content__task__chronometer} size={128}/>
          <div className={styles.content__task__search}>
            <AddTaskButton getTaskList={getTaskList}/>
            <SearchBar />
          </div>
          <div className={styles.content__task__list}>
            <TaskList taskList={tasks}/>
          </div>
        </section>
        <section className={styles.content__timer}>
          <div className={styles.content__timer__display}>
            <TimerDisplay />
          </div>
          <div className={styles.content__timer__control}>
            <TimerControl />
          </div>
          <div className={styles.content__timer__log}>
            <TimerLog />
          </div>
        </section>
      </div>
        <section className={styles.footer}>
          <Footer />
        </section>
    </div>
  )
}

export default App
