import React, { useEffect, useState } from 'react';
import './detailBlog.scss'
import { Gap, MyLink } from '../../component';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const DetailBlog = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const id = window.location.pathname.split("/").pop();
        Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then(res => {
        
            setData(res.data.data)
        })
        .catch(err =>{
            console.log('Error: ', err)
        })
    }, [])
    const navigate = useNavigate();
    if(data.author){
        return (
            <div className="detail-blog-wrapper">
                <img className="img-cover" src={`http://localhost:4000/${data.image}`} alt="thumb"/>
                <p className="blog-title">{data.title}</p>
                <p className="blog-author">{data.author.name} - {data.createdAt}</p>
                <p className="blog-body">{data.body}</p>
                <Gap height={20}/>
                <MyLink title="Kembali ke Home" onClick={()=> navigate('/')}/>
            </div>
          )
    } return <p>Loading Data...</p>
    
}

export default DetailBlog;