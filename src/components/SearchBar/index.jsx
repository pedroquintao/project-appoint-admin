import React from 'react'
import styles from './SearchBar.module.scss'

export default function SearchBar() {
  return (
    <input  className={styles.searchbar}
            type="text"
            placeholder='Teste' />
  )
}
