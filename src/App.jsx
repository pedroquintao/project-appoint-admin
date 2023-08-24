import { useState } from 'react'
import './App.css'
import React from 'react'
import AddButton from './components/AddButton'
import SearchBar from './components/SearchBar'
import TaskList from './components/TaskList'
import TimerDisplay from './components/TimerDisplay'

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
    <>
    <div>
      <AddButton />
      <SearchBar />
      <TaskList taskList={tasks}/>
    </div>
    <div>
      <TimerDisplay />
    </div>
      {/* <Header />
      <Footer /> */}
    </>
  )
}

export default App
