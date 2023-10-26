import React, { useState } from 'react'
import styles from './ButtonTaskMenu.module.scss'
import { GoKebabHorizontal } from 'react-icons/go'
import TaskMenu from './TaskMenu'

export default function ButtonTaskMenu() {

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const toggleMenuVisibility = () => {setIsMenuVisible(!isMenuVisible);}
  return (
    <div className={styles.content}>
        <GoKebabHorizontal onClick={toggleMenuVisibility}/>
        {isMenuVisible && <TaskMenu />}
    </div>
  )
}
