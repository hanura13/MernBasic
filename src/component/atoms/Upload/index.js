import React from 'react'
import { LoginBg } from '../../../assets';
import './upload.scss'

const MyUpload = () => {
  return (
    <div className="upload">
        <img className="preview" src={LoginBg} alt="preview"/>
        <input type="file"/>
    </div>
  )
}

export default MyUpload;