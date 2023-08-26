import React from 'react'
import './Task.module.scss'

export default function Task({name, finalTime}) {
  return (
    <li className='task-list__task'>
        <p>{name}</p>
        <p>{finalTime}</p>
    </li>
  )
}
