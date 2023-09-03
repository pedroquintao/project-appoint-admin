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
        <>
            <GoKebabHorizontal  className={styles.task_options}
                                onClick={toggleVisibility}/>
            {visibility && 
                (<div className={styles.task_options__menu}>
                    <AiFillEdit className={styles.menu__editBtn}/>
                    <RiDeleteBin6Line className={styles.menu__deleteBtn}/>
                </div>
                )
            }
        </>
    )
}