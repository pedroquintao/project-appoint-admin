import React, { useState } from 'react'
import styles from './TaskMenu.module.scss'
import { RiEditLine as EditButton, 
         RiDeleteBin6Line as DeleteButton, 
         RiFileHistoryLine as LogButton,
         RiCheckFill as AcceptButton,
         RiCloseFill as DeclineButton } from 'react-icons/ri';

export default function TaskMenu({toggleEditMode, editModeOn}) {

  const buttonSize = 24;
  
  return (
    
    <div className={styles.content}>
      {!editModeOn? (
        <>
          <div className={styles.content__editButton} onClick={toggleEditMode}>
            <EditButton size={buttonSize}/>
            <p>Edit</p>
          </div>
          <div className={styles.content__deleteButton}>
            <DeleteButton size={buttonSize}/>
            <p>Delete</p>
          </div>
          <div className={styles.content__logButton}>
            <LogButton size={buttonSize}/>
            <p>Logs</p>
          </div>
        </>
      ) : (
        <div className={styles.content__confirmationDiv}>
          <div>
            <AcceptButton size={buttonSize}/>
          </div>
          <div onClick={toggleEditMode}>
            <DeclineButton size={buttonSize}/>
          </div>
        </div>
      )}
    </div>
  )
}
