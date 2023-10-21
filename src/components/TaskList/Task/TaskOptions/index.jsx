import React from 'react'
import styles from './TaskOptions.module.scss'
import EditConfirmationModal from './EditConfirmationModal'
import { useState } from "react";
import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { GoKebabHorizontal } from 'react-icons/go'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function TaskOptions({task, toggleEditMode, isEditModeOn}) {
    const btnSize = 24;

    const [menuVisibility, setMenuVisibility] = useState(false);

    const [editConfirmationModalVisibility, setEditConfirmationModalVisibility] = useState(false);

    const toggleMenuVisibility = () => {setMenuVisibility(!menuVisibility);}

    const toggleEditConfirmationModalVisibility = () => {setEditConfirmationModalVisibility(!editConfirmationModalVisibility); console.log('Ḿodal Visibility is:', editConfirmationModalVisibility)}

    const teste = () => {
        console.log('Opa! Fui clicado!');
    }

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
            <GoKebabHorizontal className={styles.task_options__kebabMenu} size={btnSize} onClick={toggleMenuVisibility}/>

            {menuVisibility && (
                <div> 
                    {!isEditModeOn? (
                        <div className={styles.task_options__menu}>
                            <AiFillEdit className={styles.task_options__menu__Btn} size={btnSize} onClick={toggleEditMode} />
                            <RiDeleteBin6Line className={styles.task_options__menu__Btn} size={btnSize} onClick={toggleEditMode} />
                        </div>
                    ) : (
                        <div className={styles.task_options__menu}>
                            <AiOutlineCheck className={styles.task_options__menu__Btn} size={btnSize} onClick={toggleEditConfirmationModalVisibility}/>
                            <AiOutlineClose className={styles.task_options__menu__Btn} size={btnSize} onClick={toggleEditMode}/>
                        </div>
                        )}

                    {editConfirmationModalVisibility && (
                        <div className={styles.task_options__menu__teste}>
                            <EditConfirmationModal  task={task} toggleModalVisibility={toggleEditConfirmationModalVisibility}/>
                        </div>
                        )}

                </div>
                )
            }
        </div>
    )
}