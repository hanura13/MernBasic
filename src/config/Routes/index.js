import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Home, Login, Register } from '../../pages';

const MyRoutes = () => {
  return (
    
    <BrowserRouter>
    
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default MyRoutes;