import React from 'react'
import './createBlog.scss'
import { useNavigate } from 'react-router-dom';
import {Gap, MyButton, MyInput, MyLink, MyTextArea, MyUpload} from '../../component'

const CreateBlog = () => {
    const navigate = useNavigate();
    return (
    <div className="blog-post">
        
        <MyLink title="Kembali" onClick={ () => navigate('/')}/>
        <p className="title">Create New Blog Post</p>
        <MyInput label="Post Title" />
        <MyUpload/>
        <MyTextArea/>
        <Gap height={20}/>
        <div className="button-action">
            <MyButton title="Save" />
        </div>
        
    </div>
  )
}

export default CreateBlog;