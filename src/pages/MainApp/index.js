import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import MyFooter from '../../component/molecules/Footer';
import MyHeader from '../../component/molecules/Header';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../home';
import './mainApp.scss'

function MainApp() {
  return (
    <div className="main-app-wrapper">

        <MyHeader/>

        <div className="content-wrapper">
            <Routes>
                <Route path="/create-blog" exact element={<CreateBlog/>}/>
                <Route path="/detail-blog" exact element={<DetailBlog/>}/>
                <Route path="/" exact element={<Home/>}/>
            </Routes>
        </div>
        
        <MyFooter/>
        
    </div>
  )
}

export default MainApp;