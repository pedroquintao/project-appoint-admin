import React from 'react'
import styles from './ModalConfirmation.module.scss'
import axios from 'axios';

export default function ModalConfirmation({setIsModalOpen,
                                           formData, 
                                           toggleEditMode, 
                                           toggleDeleteMode, 
                                           editModeOn, 
                                           deleteModeOn, 
                                           toggleMenuVisibility, 
                                           getTaskList}) {
    const id = formData.id;
    const requestTarget = 'http://localhost:8080/task/'

    const onOutsideClick = (e) => {
        if(e.target.className === styles.container){
            setIsModalOpen(false);
            console.log(styles.container)
        }
    }

    const editTask = () => {
        console.log("id: ", id)
        axios.patch(`${requestTarget}${id}`, formData)
        .then(response => console.log('A requisição PATCH foi enviada', response.data))
        .catch(error => console.log('ERROR: ', error))
        .finally(() => {
            setIsModalOpen(false);
            toggleEditMode()
            toggleMenuVisibility();
            getTaskList();
        })
    }

    const deleteTask = () => {
        axios.delete(`${requestTarget}${id}`)
        .then(response => console.log('A requisição DELETE foi enviada', response.data))
        .catch(error => console.log('ERROR: ', error))
        .finally(() => {
            setIsModalOpen(false);
            toggleDeleteMode();
            toggleMenuVisibility();
            getTaskList();
        })
    }

    const requestHandler = () => {
        editModeOn? editTask() 
        : deleteModeOn? deleteTask()
        : null
    }
    return (
        <div className={styles.container} onClick={onOutsideClick}>
            <div className={styles.modal}>
                <header className={styles.modal__header}>
                    <p className={styles.modal__header__close} onClick={() => setIsModalOpen(false)} >&times;</p>
                </header>
                <div className={styles.modal__content}>
                    <p>Tem certeza que deseja editar os dados da task?</p>
                </div>
                <footer className={styles.modal__footer}>
                    <button className={styles.modal__footer__cancel} onClick={() => setIsModalOpen(false)} >Cancel</button>
                    <button className={styles.modal__footer__accept} onClick={requestHandler}>Accept</button>
                </footer>
            </div>
        </div>
    )
}
