 import React, { useState } from 'react'
import ModalCreateTask from './ModalCreateTask'
import styles from './ButtonAddTask.module.scss'
import { AiOutlinePlus } from 'react-icons/ai'

export default function ButtonAddTask({getTaskList}) {
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  // const toggleModalVisibility = () => {setIsModalOpen(!isModalOpen);}

  return (
    <div className={styles.container}>
      <div className={styles.content} onClick={() => {setIsModalOpen(true)}} >
          <AiOutlinePlus size={32} />
      </div>
          {isModalOpen && <ModalCreateTask getTaskList={getTaskList} 
                                           setIsModalOpen={setIsModalOpen} 
                                           isModalOpen={isModalOpen}/>
                                           }
    </div>
  )
}
