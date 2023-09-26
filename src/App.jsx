import { useState, useEffect } from 'react'
import styles from './App.module.scss'
import React from 'react'
import SearchBar from './components/SearchBar'
import AddTaskButton from './components/AddTaskButton'
import TaskList from './components/TaskList'
import TimerDisplay from './components/TimerDisplay'
import TimerLog from './components/TimerLog'
import Header from './components/Header'
import Footer from './components/Footer'
import { BsStopwatch } from 'react-icons/bs'

var TestTaskList = [
  {
  name: 'Nome 1',
  finalTime: '00:00'
  },
  {
  name: 'Nome 2',
  finalTime: '00:00'
  },
  {
  name: 'Nome 3',
  finalTime: '00:00'
  },
  {
  name: 'Nome 4',
  finalTime: '00:00'
  },
  {
  name: 'Nome 5',
  finalTime: '00:00'
  }
]

function App() {
  
  const [tasks, setTasks] = useState(TestTaskList)

  useEffect(() => {

    const getTaskList = async () => {

      try {
        const response = await fetch('http://localhost:8080/appoint');
        
        if (!response.ok) {
          throw new Error('Erro ao buscar task');
        }

        const data = await response.json();
        const newTasks = data.map( element => element = {name: element.user, 
                                                        finalTime: element.timestamp})
        setTasks(newTasks);

      } 
      
      catch (error) {
        console.error('Erro:', error);
      }
    }

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
            <AddTaskButton />
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
