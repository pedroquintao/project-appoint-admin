import React from 'react'
import styles from './TimerControl.module.scss'

export default function TimerCOntrol() {

  return (
    <div className={styles.timer_control}>
        <button className={styles.timer_control__btn}>P</button>
        <button className={styles.timer_control__btn}>P</button>
        <button className={styles.timer_control__btn}>S</button>
    </div>
  )
}
