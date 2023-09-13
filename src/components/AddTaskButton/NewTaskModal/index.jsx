 import React from 'react'
 import styles from './NewTaskModal.module.scss'
 
 export default function NewTaskModal() {
   return (
     <form className={styles.container}>
        <input type="text" placeholder='nome'/>
        <input type="text" placeholder='00:00'/>
        <button className={styles.create_button} type='submit'>Create</button>
     </form>
   )
 }
 