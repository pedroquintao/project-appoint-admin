import React from 'react'
import styles from './EditBtn.module.scss'

export default function EditBtn() {
  return (
    <button className={`${styles.editBtn} ${styles.hide}`}>E</button>
  )
}