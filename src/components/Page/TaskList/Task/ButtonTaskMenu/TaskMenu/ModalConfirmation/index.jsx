import React from 'react'
import styles from './ModalConfirmation.module.scss'
import axios from 'axios';

export default function ModalConfirmation({setIsModalOpen, formData, toggleEditMode, toggleMenuVisibility, getTaskList}) {
    
    const isOutsideClick = (e) => {
        if(e.target.className === styles.container){
            setIsModalOpen(false);
            console.log(styles.container)
        }
    }

    const editTask = () => {
        const id = formData.id;
        console.log("id: ", id)
        axios.patch(`http://localhost:8080/task/${id}`, formData)
        .then(response => console.log('A requisição PATH foi enviada', response.data))
        .catch(error => console.log('ERROR: ', error))
        .finally(() => {
            setIsModalOpen(false);
            toggleEditMode()
            toggleMenuVisibility();
            getTaskList();
        })
    }

    return (
        <div className={styles.container} onClick={isOutsideClick}>
            <div className={styles.modal}>
                <header className={styles.modal__header}>
                    <p className={styles.modal__header__close} onClick={() => setIsModalOpen(false)} >&times;</p>
                </header>
                <div className={styles.modal__content}>
                    <p>Tem certeza que deseja editar os dados da task?</p>
                </div>
                <footer className={styles.modal__footer}>
                    <button className={styles.modal__footer__cancel} onClick={() => setIsModalOpen(false)} >Cancel</button>
                    <button className={styles.modal__footer__accept} onClick={editTask}>Accept</button>
                </footer>
            </div>
        </div>
    )
}
