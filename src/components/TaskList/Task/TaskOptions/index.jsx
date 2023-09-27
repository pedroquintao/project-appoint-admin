import React from 'react'
import styles from './TaskOptions.module.scss'
// import EditBtn from './EditBtn'
// import DeleteBtn from './DeleteBtn'
import { useState } from "react";
import {GoKebabHorizontal} from 'react-icons/go'
import {AiFillEdit} from 'react-icons/ai'
import {RiDeleteBin6Line} from 'react-icons/ri'

export default function TaskOptions({__id}) {

    let initialVisibility = false;
    
    const [visibility, setVisibility] = useState(initialVisibility)

    const toggleVisibility = () => {setVisibility(!visibility);}

    const deleteTask = async() => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await fetch(`http://localhost:8080/appoint/${__id}`, requestOptions)
            if(!response.ok) {throw new Error('Erro ao deletar a atividade');}
        }
        catch(error) {
                  console.error('Erro:', error);

        }
        console.log('%cindex.jsx line:19 __id', 'color: #007acc;', __id);
    }

    return (
        <div className={styles.task_options}>
            <GoKebabHorizontal onClick={toggleVisibility}/>

            {visibility && (
            <div className={styles.task_options__menu}>
                <div className={styles.task_options__menu__editBtn} >
                    <AiFillEdit size={24} />
                </div>
                <div className={styles.task_options__menu__deleteBtn} >
                    <RiDeleteBin6Line onClick={deleteTask} size={24} />
                </div>
            </div>
                )
            }
        </div>
    )
}