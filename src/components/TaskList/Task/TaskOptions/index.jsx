import React from 'react'
import styles from './TaskOptions.module.scss'
import KebabBtn from './KebabBtn'
import EditBtn from './EditBtn'
import DeleteBtn from './DeleteBtn'
import { useState } from "react";

export default function TaskOptions() {

    let initialVisibility = [{
        kabab: 'styles.show',
        delete: 'styles.hide',
        edit: 'styles.hide'
    }]
    
    const [visibility, setVisibility] = useState(initialVisibility)

    const visibilityToggle = () => {
        const currentVisibility = initialVisibility.map(element => {

            console.log('%cindex.jsx line:20 element.value', 'color: #007acc;', element);
            return element.value === styles.show? 
                    element.value = styles.hide : 
                    element.value === styles.hide? 
                    element.value = styles.show : 
                    window.alert("Something wrong is not right!") 
        })
    }

    return (
        <div className={styles.taskOptions}>
            <KebabBtn onClick={visibilityToggle()}/>
            <EditBtn />
            <DeleteBtn />
        </div>
    )
}
