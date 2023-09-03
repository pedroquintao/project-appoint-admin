import React from 'react'
import styles from './TaskOptions.module.scss'
// import EditBtn from './EditBtn'
// import DeleteBtn from './DeleteBtn'
import { useState } from "react";
import {GoKebabHorizontal} from 'react-icons/go'
import {AiFillEdit} from 'react-icons/ai'
import {RiDeleteBin6Line} from 'react-icons/ri'

export default function TaskOptions() {

    let initialVisibility = false;
    
    const [visibility, setVisibility] = useState(initialVisibility)

    const toggleVisibility = () => {setVisibility(!visibility);}

    return (
        <div className={styles.task_options}>
            <GoKebabHorizontal onClick={toggleVisibility}/>

            {visibility && (
            <div className={styles.task_options__menu}>
                <div className={styles.task_options__menu__editBtn} >
                    <AiFillEdit size={24} />
                </div>
                <div className={styles.task_options__menu__deleteBtn} >
                    <RiDeleteBin6Line size={24} />
                </div>
            </div>
                )
            }
        </div>
    )
}