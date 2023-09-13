 import React from 'react'
 import styles from './NewTaskModal.module.scss'
 
 export default function NewTaskModal() {
   return (
     <div className={styles.container}>
        <input type="text" placeholder='nome'/>
        <input type="text" placeholder='00:00'/>
     </div>
   )
 }
 