 import React from 'react'
 import styles from './NewTaskModal.module.scss'
 import { useState, useEffect } from 'react'
 
 export default function NewTaskModal() {
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
      id: 5,
      user: 'Esse aqui deu bão',
      timestamp: "2023-08-20T12:15:12",
      type: "END",
      taskId: 0,
      createdAt: "2023-09-17T13:08:14.636360425",
      lastModified: "2023-09-17T13:08:14.636354434"
    }
    console.log(postFormData)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postFormData),
    };

    const response = await fetch('http://localhost:8080/appoint', requestOptions);

    if (!response.ok) {
      throw new Error('Erro ao cadastrar aluno');
    }

    const data = await response.json();
    console.log('Aluno cadastrado com sucesso:', data);

    setFormData(emptyFormData);

  }

  //escrever o metodo POST

   return (
     <form onSubmit={createNewTask} className={styles.container}>
        <input onChange={changeName} name='name' type="text" placeholder='nome'/>
        <input onChange={changeName} type="text" name='finalTime' placeholder='00:00'/>
        <button className={styles.create_button} >Create</button>
     </form>
   )
 }
 