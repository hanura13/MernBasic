import React from 'react'
import './link.scss'

const MyLink = ({title, onClick}) => {
  return (
    <div>
        <p className="link">{title}</p>
    </div>
  )
}

export default MyLink