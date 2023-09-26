 import React from 'react'
 import styles from './NewTaskModal.module.scss'
 import { useState, useEffect } from 'react'
 
 export default function NewTaskModal({visibility}) {
  
  const emptyFormData = {
    name: '',
    finalTime: ''
  }
  const [formData, setFormData] = useState(emptyFormData);

  const changeName = (e) => {
    const {name, value} = e.target

    setFormData({...formData, [name]: value,})
    console.log(formData.nome)
  }

  const createNewTask = async (e) => {
    e.preventDefault();
    
    const postFormData = {
      // user: formData.name,
      // timestamp: formData.finalTime
      // id: 5,
      user: formData.name,
      timestamp: "2023-08-20T12:15:12",
      type: "END",
      taskId: 0,
      createdAt: "2023-09-17T13:08:14.636360425",
      lastModified: "2023-09-17T13:08:14.636354434"
      
      // private Integer id;
      // private String user;
      // private LocalDateTime timestamp;
      // private AppointType type;
      // private Integer taskId;
      // private LocalDateTime createdAt;
      // private LocalDateTime lastModified;
    }

    console.log('%cindex.jsx line:44 postFormData:', 'color: #26bfa5;', postFormData);
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postFormData),
    };

    try {

      const response = await fetch('http://localhost:8080/appoint', requestOptions);

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
  }

   return (
    <>
      {visibility && (
          <form onSubmit={createNewTask} className={styles.container}>
            <input onChange={changeName} name='name' type="text" placeholder='nome'/>
            <input onChange={changeName} type="text" name='finalTime' placeholder='00:00'/>
            <button className={styles.create_button} >Create</button>
          </form>
        )
      }
    </>
  )
}
 