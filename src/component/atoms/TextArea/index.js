import React from 'react'
import './textarea.scss'

const MyTextArea = ({...rest}) => {
  return (
    <div>
        <textarea className="text-area" {...rest}>

        </textarea>
    </div>
  )
}

export default MyTextArea