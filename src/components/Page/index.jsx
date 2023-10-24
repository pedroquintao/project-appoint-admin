import React from 'react'
import styles from './Page.module.scss'
import Display from './Display'
import ButtonAddTask from './ButtonAddTask'
import TaskList from './TaskList'
import SearchBar from './SearchBar'
import ControlPanel from './ControlPanel'

export default function Page() {
  return (
        <div className={styles.content}>
            <Display />
            <ControlPanel />
            <div className={styles.content__addAndSearch}>
              <ButtonAddTask />
              <SearchBar />
            </div>
            <TaskList />
        </div>
  )
}
