import React, { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import styles from './AddTaskButton.module.scss'
import NewTaskModal from './NewTaskModal';


export default function AddTaskButton() {

  let initialVisibility = false;

  const [visibility, setVisibility] = useState(initialVisibility)

  const toggleVisibility = () => {
    console.log('%cindex.jsx line:14 Antes', 'color: #007acc;', visibility);
    setVisibility(!visibility);
    console.log('%cindex.jsx line:16 Depois', 'color: #007acc;', visibility);
  }

  return (
    <>
    <div className={styles.add_btn} >
      <AiOutlinePlus className={styles.add_btn__plus} onClick={toggleVisibility} size={32} />
      {visibility && (<NewTaskModal />)}
    </div>
    </>
  )
}
