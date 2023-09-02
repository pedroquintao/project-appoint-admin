import React from 'react'
import styles from './DeleteBtn.module.scss'

export default function DeleteBtn() {
  return (
    <button className={`${styles.deleteBtn} ${styles.hide}`}>X</button>
  )
}