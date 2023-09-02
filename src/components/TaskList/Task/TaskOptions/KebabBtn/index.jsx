import React from 'react'
import styles from './KebabBtn.module.scss'

export default function KebabBtn({visibility}) {
  console.log('%cindex.jsx line:5 visibility', 'color: #007acc;', visibility);  
  return (
    <button className={visibility}>⋮</button>
  )
}
