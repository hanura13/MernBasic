import React, { useEffect, useState } from 'react'
import './home.scss'
import { Gap, MyButton } from '../../component/atoms';
import { BlogItem } from '../../component/molecules';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Axios from 'axios';



const Home =() => {
    const [counter, setCounter] = useState(1);
    const {dataBlog, page} = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(setDataBlog(counter))
      
    })
    
    const navigate = useNavigate();

    const previous = () => {
        setCounter(counter <= 1 ? 1 : counter - 1)
        
    }

    const next = () => {
        setCounter(counter === page.totalPage ? page.totalPage : counter +1)
    }

    const confirmDelete = (id) => {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Apakah anda yakin akan menghapus?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
                    .then(res => {
                        console.log('Sukses delete ', res.data)
                    })
                    .catch(err => {
                        console.log('Error: ', err)
                    })
                }
              },
              {
                label: 'No',
                onClick: () => console.log('User tidak setuju')
              }
            ]
          });
    }
    return ( 
    <div className="home-app-wrapper">
        <div className="create-wrapper">
            <MyButton title="Create Blog" onClick={() => navigate('/create-blog')}/>
        </div>
        <Gap height={20}/>
        <div className="content-wrapper">
            {dataBlog.map(blog => {
                return <BlogItem key={blog._id} 
                image={`http://localhost:4000/${blog.image}`}
                title={blog.title}
                body={blog.body}
                name={blog.author.name}
                date={blog.createdAt}
                _id={blog._id}
                onDelete={confirmDelete}/>
                
            })}
        
        </div>
       
        <div className="pagination">
            <MyButton title="Previous" onClick={previous}/>
            <Gap width={20}/>
            <p className="text-page">{page.currentPage} / {page.totalPage}</p>

            <Gap width={20}/>
            <MyButton title="Next" onClick={next}/>
        </div>
        <Gap height={20}/>
    </div>
  )
}

export default Home;