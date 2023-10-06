import React from 'react'
import styles from './TaskOptions.module.scss'
// import EditButton from './EditButton';
import { useState } from "react";
import {AiFillEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import {GoKebabHorizontal} from 'react-icons/go'
import {RiDeleteBin6Line} from 'react-icons/ri'

export default function TaskOptions({__id}) {
    
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

    const [isEditModeOn, setIsClicked] = useState(false);

    const toggleEditMode = () => {console.log('%cindex.jsx line:37 isEditModeOn', 'color: #007acc;', isEditModeOn);setIsClicked(!isEditModeOn);}

    return (
        <div className={styles.task_options}>
            <GoKebabHorizontal onClick={toggleVisibility}/>

            {visibility && (
                <div> 
                    {!isEditModeOn? (
                        <div className={styles.task_options__menu}>
                            <AiFillEdit className={styles.task_options__menu__editBtn} size={24} onClick={toggleEditMode} />
                            <RiDeleteBin6Line className={styles.task_options__menu__deleteBtn} size={24} onClick={toggleEditMode} />
                        </div>
                    ) : (
                        <div className={styles.task_options__menu}>
                            <AiOutlineCheck size={24} onClick={toggleEditMode}/>
                            <AiOutlineClose size={24} onClick={toggleEditMode}/>
                        </div>
                        )}
                </div>
                // <div className={styles.task_options__menu}>
                //     <EditButton isEditModeOn={ isEditModeOn } toggleEditMode={toggleEditMode}/>
                    
                //     {!isEditModeOn && <div className={styles.task_options__menu__deleteBtn} >
                //         <RiDeleteBin6Line //onClick={ deleteTask } 
                //         size={24} />
                //     </div>}
                // </div>
                )
            }
        </div>
    )
}