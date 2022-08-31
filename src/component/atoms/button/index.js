import React from 'react'
import './index.scss'

function MyButton({title, ...rest}) {
  return <button className="button" {...rest}>{title}</button>
}

export default MyButton;