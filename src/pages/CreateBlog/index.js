import React from 'react'
import './createBlog.scss'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {Gap, MyButton, MyInput, MyLink, MyTextArea, MyUpload} from '../../component'
import { postToAPI, setForm, setImgPreview } from '../../config/redux/action';

const CreateBlog = () => {
    const {form, imgPreview} = useSelector(state => state.createBlogReducer)
    const {title, body} = form;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = () => {
        postToAPI(form)
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        dispatch(setForm('image',file))
        dispatch(setImgPreview(URL.createObjectURL(file)))
    }
    return (
    <div className="blog-post">
        
        <MyLink title="Kembali" onClick={ () => navigate('/')}/>
        <p className="title">Create New Blog Post</p>
        <MyInput label="Post Title" value={title} onChange={(e)=> dispatch(setForm('title', e.target.value))}/>
        <MyUpload onChange={(e)=> onImageUpload(e)} img={imgPreview}/>
        <MyTextArea value={body} onChange={(e)=> dispatch(setForm('body',e.target.value))}/>
        <Gap height={20}/>
        <div className="button-action">
            <MyButton title="Save" onClick={onSubmit}/>
        </div>
        
    </div>
  )
}

export default CreateBlog;