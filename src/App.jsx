import { useState } from 'react'
import './App.css'
import React from 'react'
import AddButton from './components/AddButton'
import SearchBar from './components/SearchBar'
import TaskList from './components/TaskList'
import TimerDisplay from './components/TimerDisplay'
import Header from './components/Header'

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
    <section>
      <Header />
      <section>
        <AddButton />
        <SearchBar />
        <TaskList taskList={tasks}/>
      </section>
      <section>
        <TimerDisplay />
      </section>
        {/* <Header />
        <Footer /> */}
    </section>
  )
}

export default App
