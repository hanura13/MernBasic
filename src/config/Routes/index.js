import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home, Login, Register } from '../../pages';

const Routes = () => {
  return (

   <BrowserRouter>
    <div>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default Routes;