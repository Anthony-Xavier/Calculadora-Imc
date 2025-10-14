import './Button.css'

import React from 'react'

export const Button = ({id,text}) => {
  return (
    <button id={id}>{text}</button>
  )
}
