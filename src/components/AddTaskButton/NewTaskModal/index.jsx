 import React from 'react'
 import styles from './NewTaskModal.module.scss'
 import { useState, useEffect } from 'react'
 
 export default function NewTaskModal({visibility, setVisibility, getTaskList}) {
  
  const emptyFormData = {
    name: '',
    plannedTime: {
      hours: null,
      minutes: null,
      seconds: null
      }
  }

  const [formData, setFormData] = useState(emptyFormData);

  const changeName = (e) => {
    const {name, value} = e.target

    setFormData({...formData, [name]: value})
    console.log(formData.name)
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

  const createNewTask = async (e) => {
    e.preventDefault();
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    const taskUrl = 'http://localhost:8080/task'

    try {

      const response = await fetch(taskUrl, requestOptions);

      if (!response.ok) {
        throw new Error('Erro ao cadastrar a nova atividade');
      }

      const data = await response.json();
      console.log('Nova atividade cadastrada com sucesso:', data);

      setFormData(emptyFormData);
    }

    catch(error) {
      console.error('Erro:', error);
    }

    finally {
      setVisibility(false);
      getTaskList();
    }
  }

   return (
    <>
      {visibility && (
          <form onSubmit={createNewTask} className={styles.container}>
            <input onChange={changeName} name='name' type="text" placeholder='nome'/>
            <input onChange={changePlannedTime} type="time" step='1' name='plannedTime' placeholder='00:00'/>
            <button className={styles.create_button} >Create</button>
          </form>
        )
      }
    </>
  )
}
 