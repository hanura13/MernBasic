import React from 'react';
import './detailBlog.scss'
import { RegisterBg } from '../../assets';
import { Gap, MyLink } from '../../component';
import { useNavigate } from 'react-router-dom';

const DetailBlog = ()=> {
const navigate = useNavigate();
  return (
    <div className="detail-blog-wrapper">
        <img className="img-cover" src={RegisterBg} alt="thumb"/>
        <p className="blog-title">Title Blog</p>
        <p className="blog-author">Author - Date Post</p>
        <p className="blog-body">Content Blog</p>
        <Gap height={20}/>
        <MyLink title="Kembali ke Home" onClick={()=> navigate('/')}/>
    </div>
  )
}

export default DetailBlog;