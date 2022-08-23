import React from 'react';
import './header.scss';

function MyHeader() {
  return (
    <div className="header">
        <p className="logo-app">MERN-BLOG</p>
        <p className="menu-item">Logout</p>
    </div>
  )
}

export default MyHeader;