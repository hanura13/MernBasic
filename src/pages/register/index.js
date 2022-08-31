import React from 'react'
import { RegisterBg } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { Gap, MyButton, MyLink } from '../../component/atoms';
import MyInput from '../../component/atoms/input';
import './register.scss'

const Register = () => {
    const navigate = useNavigate();
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
            <Gap height={60}/>
            <MyLink title="Kembali ke Login" onClick={()=> navigate('/login')}/>
        </div>
    </div>
  )
}

export default Register;