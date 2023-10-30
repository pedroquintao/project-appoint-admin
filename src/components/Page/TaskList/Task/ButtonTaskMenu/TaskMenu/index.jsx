import React, { useState } from 'react'
import styles from './TaskMenu.module.scss'
import { RiEditLine as EditButton, 
         RiDeleteBin6Line as DeleteButton, 
         RiFileHistoryLine as LogButton,
         RiCheckFill as AcceptButton,
         RiCloseFill as DeclineButton } from 'react-icons/ri';
import ModalConfirmation from './ModalConfirmation';
import { createPortal } from 'react-dom';

export default function TaskMenu({toggleEditMode, toggleDeleteMode, editModeOn, deleteModeOn, formData, toggleMenuVisibility, getTaskList}) {

  const buttonSize = 24;
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModeHandler = () => {
    editModeOn? toggleEditMode()
    : deleteModeOn? toggleDeleteMode()
    : null
  }
  
  return (
    
    <div className={styles.content}>
      {editModeOn || deleteModeOn ? (
        <div className={styles.content__confirmationDiv}>
        <div onClick={() => {setIsModalOpen(true)}}>
          <AcceptButton size={buttonSize}/>
        </div>
        <div onClick={toggleModeHandler}>
          <DeclineButton size={buttonSize}/>
        </div>
      </div>
      ) : (
        <>
          <div className={styles.content__editButton} onClick={toggleEditMode}>
            <EditButton size={buttonSize}/>
            <p>Edit</p>
          </div>
          <div className={styles.content__deleteButton} onClick={toggleDeleteMode}>
            <DeleteButton size={buttonSize}/>
            <p>Delete</p>
          </div>
          <div className={styles.content__logButton}>
            <LogButton size={buttonSize}/>
            <p>Logs</p>
          </div>
        </>
      )}
      {isModalOpen && 
      // É comum utilizar o createPortal em modais para coloca-los como silibin do body
        createPortal(
          <ModalConfirmation setIsModalOpen={setIsModalOpen} 
                             formData={formData}
                             toggleEditMode={toggleEditMode}
                             toggleDeleteMode={toggleDeleteMode}
                             editModeOn={editModeOn}
                             deleteModeOn={deleteModeOn}
                             toggleMenuVisibility={toggleMenuVisibility} 
                             getTaskList={getTaskList} />
                             , document.body)
      }
    </div>
  )
}
