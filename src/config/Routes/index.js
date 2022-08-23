import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Login, MainApp, Register } from '../../pages';

const MyRoutes = () => {
  return (
    
    <BrowserRouter>
    
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<MainApp/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default MyRoutes;