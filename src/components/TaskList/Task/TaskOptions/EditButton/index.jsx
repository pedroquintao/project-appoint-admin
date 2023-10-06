import React from 'react'
import styles from './EditButton.module.scss'
import {AiFillEdit} from 'react-icons/ai'

export default function EditButton() {
    
    const editTask = async() => {
        const requestOptions = {
            method: 'PATCH'
        }
    }

    return (
        <div className={styles.edit_button} >
            <AiFillEdit size={24} />
        </div>
    )
}
