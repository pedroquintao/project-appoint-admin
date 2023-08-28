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
]

function App() {
  const [tasks, setTask] = useState(TestTaskList)


  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.body}>
        <section className={styles.tasks}>
          <AddButton />
          <SearchBar />
          <TaskList taskList={tasks}/>
        </section>
        <section className={styles.display}>
          <TimerDisplay />
        </section>
      </div>
        <Footer />
    </div>
  )
}

export default App
