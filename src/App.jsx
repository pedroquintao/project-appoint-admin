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


  return (

    <div className={styles.page}>
      <section className={styles.header}>
        <Header />
      </section>
      <div className={styles.content}>
        <section className={styles.content__task}>
          <BsStopwatch className={styles.content__task__chronometer} size={128}/>
          <div className={styles.content__task__search}>
            <AiOutlinePlus className={styles.content__task__add_btn} size={32}/>
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
