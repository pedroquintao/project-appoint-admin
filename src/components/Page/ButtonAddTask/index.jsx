import React from 'react'
import ModalCreateTask from './ModalCreateTask'
import styles from './ButtonAddTask.module.scss'
import { AiOutlinePlus } from 'react-icons/ai'

export default function ButtonAddTask() {
  
  return (
    <div className={styles.content}>
        <AiOutlinePlus size={24} />
    </div>
  )
}
