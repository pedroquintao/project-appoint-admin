import React, { useState } from 'react'
import styles from './ButtonTaskMenu.module.scss'
import { GoKebabHorizontal as MenuButton } from 'react-icons/go'
import TaskMenu from './TaskMenu'

export default function ButtonTaskMenu({editModeOn, toggleEditMode}) {

  const buttonSize = 24

  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const toggleMenuVisibility = () => {setIsMenuVisible(!isMenuVisible);}

  return (
    <div className={styles.content}>
        <MenuButton className={styles.content__menuButton} onClick={toggleMenuVisibility} size={buttonSize}/>
        {isMenuVisible && <TaskMenu toggleEditMode={toggleEditMode} editModeOn={editModeOn} />}
    </div>
  )
}
