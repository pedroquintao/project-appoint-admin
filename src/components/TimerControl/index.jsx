import React from 'react'
import styles from './TimerControl.module.scss'
import { useState } from 'react';
import { PiPlayFill, PiPauseFill, PiStopFill} from 'react-icons/pi'

export default function TimerControl() {

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlaySytate = () => {setIsPlaying(!isPlaying);}
  
  return (
    <div className={styles.timer_control}>
        {isPlaying? <PiPlayFill className={styles.timer_control__btn} onClick={togglePlaySytate} /> :
                    <PiPauseFill className={styles.timer_control__btn} onClick={togglePlaySytate} />}
        <PiStopFill className={styles.timer_control__btn} />
    </div>
  )
}
