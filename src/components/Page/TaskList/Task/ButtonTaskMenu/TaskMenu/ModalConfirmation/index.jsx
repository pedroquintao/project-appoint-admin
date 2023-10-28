import React from 'react'
import styles from './ModalConfirmation.module.scss'

export default function ModalConfirmation({setIsModalOpen}) {
  return (
    <div className={styles.container} onClick={(e) => {
                                                        if(e.target.className === styles.container){
                                                            setIsModalOpen(false);
                                                            console.log(styles.container)
                                                        }
                                                    }
                                                }>
        <div className={styles.modal}>
            <header className={styles.modal__header}>
                <p className={styles.modal__header__close} onClick={() => setIsModalOpen(false)} >&times;</p>
            </header>
            <div className={styles.modal__content}>
                <p>Tem certeza que deseja editar os dados da task?</p>
            </div>
            <footer className={styles.modal__footer}>
                <button className={styles.modal__footer__cancel} onClick={() => setIsModalOpen(false)} >Cancel</button>
                <button className={styles.modal__footer__accept}>Accept</button>
            </footer>
        </div>
    </div>
  )
}
