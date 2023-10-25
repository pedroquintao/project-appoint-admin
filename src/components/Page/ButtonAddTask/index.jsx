import React, { useState } from 'react'
import ModalCreateTask from './ModalCreateTask'
import styles from './ButtonAddTask.module.scss'
import { AiOutlinePlus } from 'react-icons/ai'

export default function ButtonAddTask({getTaskList}) {
  
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModalVisibility = () => {setIsModalVisible(!isModalVisible);}

  return (
    <div className={styles.content}>
        <AiOutlinePlus size={24} onClick={toggleModalVisibility}/>
        {isModalVisible && <ModalCreateTask getTaskList={getTaskList} toggleModalVisibility={toggleModalVisibility} />}
    </div>
  )
}
