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
  
  const [tasks, setTasks] = useState(TestTaskList)

  useEffect(() => {
    // Função para fazer a requisição GET e obter a lista de pessoas
<<<<<<< HEAD
    async function fetchTasks() {
=======
    async function getTaskList() {
>>>>>>> 0936d1c222243e8c545c32fd83b1f0bbe77e518f
      try {
        const response = await fetch('http://localhost:8080/appoint');
        
        if (!response.ok) {
          throw new Error('Erro ao buscar task');
        }

        const data = await response.json();
<<<<<<< HEAD
        // console.log('%cApp.jsx line:51 data', 'color: #007acc;', data);
        setTasks(data);
=======
        console.log('%cApp.jsx line:51 data', 'color: #007acc;', data);
        const newTask = data.map( element => element = {name: element.user, finalTime: element.timestamp})
        console.log('%cApp.jsx line:53 newTask', 'color: #007acc;', newTask);
        setTask(newTask);
>>>>>>> 0936d1c222243e8c545c32fd83b1f0bbe77e518f

      } catch (error) {
        console.error('Erro:', error);
      }
    }
<<<<<<< HEAD
    console.log('%cApp.jsx line:58 REDNDERIZOU', 'color: #007acc;', 'RENDERIZOU');
    fetchTasks();
  }, [])
  
=======
    getTaskList();
  }, []);

>>>>>>> 0936d1c222243e8c545c32fd83b1f0bbe77e518f
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
