import React from 'react'
import { LoginBg, RegisterBg } from '../../assets';
import { Gap, MyButton, MyLink } from '../../component/atoms';
import MyInput from '../../component/atoms/input';
import './register.scss'

const Register = () => {
  return (
    <div className="main-page">
        <div className="left">
            <img src={RegisterBg} className="bg-image" alt="imgBg"/>
        </div>
        <div className="right">
            <p className="title">Register</p>
            <MyInput label="Full Name" placeholder="Full Name"/>
            <Gap height={18}/>
            <MyInput label="Email" placeholder="Email"/>
            <Gap height={18}/>
            <MyInput label="Password" placeholder="Password"/>
            <Gap height={50}/>
            <MyButton title="Register"/>
            <MyLink title="Kembali ke Login"/>
        </div>
    </div>
  )
}

export default Register;