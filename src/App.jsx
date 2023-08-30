import { useState } from 'react'
import styles from './App.module.scss'
import React from 'react'
import AddButton from './components/AddButton'
import SearchBar from './components/SearchBar'
import TaskList from './components/TaskList'
import TimerDisplay from './components/TimerDisplay'
import Header from './components/Header'
import Footer from './components/Footer'

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
  }
  ,
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
          <div className={styles.task__search}>
            <AddButton />
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
        </section>
      <section className={styles.footer}>
        <Footer />
      </section>
    </div>
  )
}

export default App
