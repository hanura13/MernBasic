import React from 'react'
import './index.scss'

function MyButton({title, ...rest}) {
  return (
    <div>
        <button className="button" {...rest}>{title}</button>
    </div>
  )
}

export default MyButton;