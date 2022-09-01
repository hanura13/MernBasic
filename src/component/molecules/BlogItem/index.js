import React from 'react'
import { Gap, MyButton } from '../../atoms';
import { useNavigate } from 'react-router-dom';
import './blogitem.scss'

const BlogItem =(props)=> {
    const navigate = useNavigate();
    const {image, title, name, date, body, _id} = props;
    return (
    <div className="blog-item">
        <img className="image-thumb" src={image} alt="post"/>
        <div className="content-detail">
            <p className="title">{title}</p>
            <p className="author">{name} - {date}</p>
            <p className="body">{body}</p>
            <Gap height={20}/>
            <MyButton title="View Detail" onClick={()=> navigate(`/detail-blog/${props._id}`)}/>
        </div>
    </div> 
  )
}

export default BlogItem;