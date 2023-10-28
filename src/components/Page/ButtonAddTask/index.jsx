 import React, { useState } from 'react'
import ModalCreateTask from './ModalCreateTask'
import styles from './ButtonAddTask.module.scss'
import { AiOutlinePlus } from 'react-icons/ai'

export default function ButtonAddTask({getTaskList}) {
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  // const toggleModalVisibility = () => {setIsModalOpen(!isModalOpen);}

  return (
    <div className={styles.content} onClick={() => setIsModalOpen(true)} >
        <AiOutlinePlus size={24} />
        {isModalOpen && <ModalCreateTask getTaskList={getTaskList} toggleModalVisibility={setIsModalOpen} />}
    </div>
  )
}
