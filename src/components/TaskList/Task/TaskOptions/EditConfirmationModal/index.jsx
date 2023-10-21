import React, { useState } from 'react'
import styles from './EditConfirmationModal.module.scss'

export default function EditConfirmationModal({task, toggleModalVisibility}) {


  const editTask = async (e) => {
    
    // const standardInput = {
      
    // }
    console.log('task: ', task);
  }

  return (
    <div className={styles.content}>
      <h1>Are you sure you want to edit this task data?</h1>
      <div className={styles.content__buttons}>
        <button className={styles.content__buttons__cancel} onClick={toggleModalVisibility} >Cancel</button>
        <button className={styles.content__buttons__edit} onClick={editTask} >Edit</button>
      </div>
    </div>
  )
}
