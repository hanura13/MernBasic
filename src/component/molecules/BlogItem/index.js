import React from 'react'
import { Gap, MyButton } from '../../atoms';
import { useNavigate } from 'react-router-dom';
import './blogitem.scss'

const BlogItem =(props)=> {
    const navigate = useNavigate();
    const {image, title, name, date, body, _id, onDelete} = props;
    return (
    <div className="blog-item">
        <img className="image-thumb" src={image} alt="post"/>
        <div className="content-detail">
            <div className="title-wrapper">
                <p className="title">{title}</p>
                <div className="edit-wrapper">
                    <p className="edit" onClick={()=> navigate(`/create-blog/${props._id}`)}>Edit</p> |  <p className="delete" onClick={()=> onDelete(_id)}> Delete</p>
                </div>
            </div>
           
            <p className="author">{name} - {date}</p>
            <p className="body">{body}</p>
            <Gap height={20}/>
            <MyButton title="View Detail" onClick={()=> navigate(`/detail-blog/${props._id}`)}/>
        </div>
    </div> 
  )
}

export default BlogItem;