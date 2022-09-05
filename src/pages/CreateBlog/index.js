import React, { useEffect, useState } from 'react'
import './createBlog.scss'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {Gap, MyButton, MyInput, MyLink, MyTextArea, MyUpload} from '../../component'
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../config/redux/action';
import Axios from 'axios';

const CreateBlog = () => {
    const {form, imgPreview} = useSelector(state => state.createBlogReducer)
    const {title, body} = form;
    const[isUpdate, setIsUpdate] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=> {
        const id = window.location.pathname.split("/").pop();
        if(id != 'create-blog'){
            setIsUpdate(true)
            Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
                const data = res.data.data
                console.log('Result: ', data)
                dispatch(setForm('title', data.title))
                dispatch(setForm('body', data.body))
                dispatch(setImgPreview(`http://localhost:4000/${data.image}`))
            })
            .catch(err => {
                console.log('Error: ', err)
            })
        }
    }, [])

    const onSubmit = () => {
        const id = window.location.pathname.split("/").pop();
        if(isUpdate){
            console.log('Update data')
            updateToAPI(form, id)
        } else{
            console.log('create data')
            postToAPI(form)
        }
        
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        dispatch(setForm('image',file))
        dispatch(setImgPreview(URL.createObjectURL(file)))
    }
    return (
    <div className="blog-post">
        
        <MyLink title="Kembali" onClick={ () => navigate('/')}/>
        <p className="title">{isUpdate ? 'Update' : 'Create New'} Blog Post</p>
        <MyInput label="Post Title" value={title} onChange={(e)=> dispatch(setForm('title', e.target.value))}/>
        <MyUpload onChange={(e)=> onImageUpload(e)} img={imgPreview}/>
        <MyTextArea value={body} onChange={(e)=> dispatch(setForm('body',e.target.value))}/>
        <Gap height={20}/>
        <div className="button-action">
            <MyButton title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit}/>
        </div>
        
    </div>
  )
}

export default CreateBlog;