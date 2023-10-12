import React from 'react'
import styles from './EditConfirmationModal.module.scss'

export default function EditConfirmationModal({toggleModalVisibility}) {

  const editTask = async (e) => {
    window.alert('Fazer aqui o método para enviar a requisicao para editar a tarefa!')
  }

  return (
    <div className={styles.content}>
      <h1>Are you sure you want to edit the data for this task?</h1>
      <div className={styles.content__buttons}>
        <button className={styles.content__buttons__cancel} onClick={toggleModalVisibility} >Cancel</button>
        <button className={styles.content__buttons__edit} onClick={editTask} >Edit</button>
      </div>
    </div>
  )
}
