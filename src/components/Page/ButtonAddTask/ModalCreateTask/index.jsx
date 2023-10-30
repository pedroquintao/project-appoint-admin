 import React, { useState } from 'react'
import styles from './ModalCreateTask.module.scss'
import axios from 'axios';

export default function ModalCreateTask({getTaskList, setIsModalOpen}) {

  const [formData, setFormData] = useState();

  const changeName = (e) => {
    const {name, value} = e.target

    setFormData({...formData, [name]: value})
  }

  const changePlannedTime = (e) => {
    const {name, value} = e.target

    const [hours, minutes, seconds] = value.split(':');
    
    setFormData({...formData, [name]: {
                                        hours: hours, 
                                        minutes: minutes, 
                                        seconds: seconds
                                      }})
  }

  const createNewTask = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/task', formData)
    .then(response => console.log('Requisição enviada com sucesso!', response.data))
    .catch(error => console.log('Erro ao enviar a requisição!', error))
    .finally(() => {
      setIsModalOpen(false);
      getTaskList();
    })
  }

  return (
    <>
      <div className={styles.container} 
           onClick={(e) => {
                            if(e.target.className === styles.container){
                              setIsModalOpen(false)
                              console.log('CLicou Fora!')
                            }
                              }}
          > 
      </div>
      <div className={styles.content}>
        <label>Name</label>
        <input name='name' type='text' placeholder='Hours to finish work' onChange={changeName}/>

        <label>Planned Time</label>
        <input name='plannedTime' type='time' step='1' onChange={changePlannedTime}/>

        <div className={styles.content__buttons}>
          <button className={styles.content__buttons__cancel} onClick={() => setIsModalOpen(false)}>Cancel</button>
          <button type='submit' onClick={createNewTask}>Create</button>
        </div>
      </div>
    </>
  )
}
