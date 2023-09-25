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
import {BsStopwatch} from 'react-icons/bs'

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
  
  const [tasks, setTask] = useState(TestTaskList)

  useEffect(() => {
    // Função para fazer a requisição GET e obter a lista de pessoas
    async function getTaskList() {
      try {
        const response = await fetch('http://localhost:8080/appoint');
        
        if (!response.ok) {
          throw new Error('Erro ao buscar task');
        }

        const data = await response.json();
        const newTask = data.map( element => element = {name: element.user, 
                                                        finalTime: element.timestamp})
        setTask(newTask);

      } catch (error) {
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
