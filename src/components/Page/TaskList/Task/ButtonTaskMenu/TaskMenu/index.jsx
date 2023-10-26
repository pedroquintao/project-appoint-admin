import React, { useState } from 'react'
import styles from './TaskMenu.module.scss'
import { RiEditLine, RiDeleteBin6Line, RiFileHistoryLine } from 'react-icons/ri'


export default function TaskMenu() {
  const buttonSize = 24;
  
  return (
    <div className={styles.content}>
      <div className={styles.content__editButton}>
        <RiEditLine size={buttonSize}/>
        <p>Edit</p>
      </div>
      <div className={styles.content__deleteButton}>
        <RiDeleteBin6Line size={buttonSize}/>
        <p>Delete</p>
      </div>
      <div className={styles.content__logButton}>
        <RiFileHistoryLine size={buttonSize}/>
        <p>Logs</p>
      </div>
    </div>
  )
}
