import React, { useState } from 'react'
import styles from './TaskMenu.module.scss'
import { RiEditLine as EditButton, 
         RiDeleteBin6Line as DeleteButton, 
         RiFileHistoryLine as LogButton,
         RiCheckFill as AcceptButton,
         RiCloseFill as DeclineButton } from 'react-icons/ri';
import ModalConfirmation from './ModalConfirmation';
import { createPortal } from 'react-dom';

export default function TaskMenu({toggleEditMode, editModeOn}) {

  const buttonSize = 24;
  
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <div onClick={() => {setIsModalOpen(true)}}>
            <AcceptButton size={buttonSize}/>
          </div>
          <div onClick={toggleEditMode}>
            <DeclineButton size={buttonSize}/>
          </div>
        </div>
      )}
      {isModalOpen && 
      // É comum utilizar o createPortal em modais para coloca-los como silibin do body
        createPortal(
          <ModalConfirmation setIsModalOpen={setIsModalOpen}/>, document.body)
      }
    </div>
  )
}
