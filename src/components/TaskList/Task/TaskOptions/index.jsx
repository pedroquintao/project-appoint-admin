import React from 'react'
import styles from './TaskOptions.module.scss'
// import EditButton from './EditButton';
import { useState } from "react";
import {AiFillEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import {GoKebabHorizontal} from 'react-icons/go'
import {RiDeleteBin6Line} from 'react-icons/ri'

export default function TaskOptions({toggleEditMode, isEditModeOn}) {
    const btnSize = 24;
    const [visibility, setVisibility] = useState(false)

    const toggleVisibility = () => {setVisibility(!visibility);}

//! A função delete task deve pertencer a um futuro componente que represente o botão de deletar task
    // const deleteTask = async() => {
    //     const requestOptions = {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }

    //     const taskUrl = 'http://localhost:8080/task/'

    //     try {
    //         const response = await fetch(taskUrl + `${__id}`, requestOptions)
    //         if(!response.ok) {throw new Error('Erro ao deletar a atividade');}
    //     }
        
    //     catch(error) {
    //               console.error('Erro:', error);
    //     }
    // }

    
    return (
        <div className={styles.task_options}>
            <GoKebabHorizontal className={styles.task_options__kebabMenu} size={btnSize} onClick={toggleVisibility}/>

            {visibility && (
                <div> 
                    {!isEditModeOn? (
                        <div className={styles.task_options__menu}>
                            <AiFillEdit className={styles.task_options__menu__editBtn} size={btnSize} onClick={toggleEditMode} />
                            <RiDeleteBin6Line className={styles.task_options__menu__deleteBtn} size={btnSize} onClick={toggleEditMode} />
                        </div>
                    ) : (
                        <div className={styles.task_options__menu}>
                            <AiOutlineCheck className={styles.task_options__menu__checkBtn} size={btnSize} onClick={toggleEditMode}/>
                            <AiOutlineClose className={styles.task_options__menu__checkBtn} size={btnSize} onClick={toggleEditMode}/>
                        </div>
                        )}
                </div>
                )
            }
        </div>
    )
}