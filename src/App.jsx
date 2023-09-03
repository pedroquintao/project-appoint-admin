import { useState } from 'react'
import styles from './App.module.scss'
import React from 'react'
import SearchBar from './components/SearchBar'
import TaskList from './components/TaskList'
import TimerDisplay from './components/TimerDisplay'
import TimerLog from './components/TimerLog'
import Header from './components/Header'
import Footer from './components/Footer'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsStopwatch} from 'react-icons/bs'

var TestTaskList = [
  {
  name: 'Nome 1',
  finalTime: 'Tempo Final 1'
  },
  {
  name: 'Nome 2',
  finalTime: 'Tempo Final 2'
  },
  {
  name: 'Nome 3',
  finalTime: 'Tempo Final 3'
  },
  {
  name: 'Nome 4',
  finalTime: 'Tempo Final 4'
  },
  {
  name: 'Nome 5',
  finalTime: 'Tempo Final 5'
  }
]

function App() {
  const [tasks, setTask] = useState(TestTaskList)


  return (

    <div className={styles.page}>
      <section className={styles.header}>
        <Header />
      </section>
      <section className={styles.task}>
        <BsStopwatch className={styles.task__chronometer} size={256}/>
        <div className={styles.task__search}>
          <AiOutlinePlus className={styles.task__addBtn} size={32}/>
          <SearchBar />
        </div>
        <div className={styles.task__list}>
          <TaskList taskList={tasks}/>
        </div>
      </section>
      <section className={styles.timer}>
        <div className={styles.timer__display}>
          <TimerDisplay />
        </div>
        <div className={styles.timer__log}>
          <TimerLog />
        </div>
      </section>
      <section className={styles.footer}>
        <Footer />
      </section>
    </div>
  )
}

export default App
