import React from 'react';
import { LoginBg } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { Gap, MyButton, MyLink } from '../../component/atoms';
import MyInput from '../../component/atoms/input';

const Login = () => {
    const navigate = useNavigate();
    return (
    <div className="main-page">
        <div className="left">
            <img src={LoginBg} className="bg-image" alt="imgBg"/>
        </div>
        <div className="right">
            <p className="title">Login</p>
            <MyInput label="Email" placeholder="Email"/>
            <Gap height={18}/>
            <MyInput label="Password" placeholder="Password"/>
            <Gap height={50}/>
            <MyButton title="Login" onClick={()=> navigate('/')}/>
            <Gap height={60}/>
            <MyLink title="Belum punya akun? daftar" onClick={()=> navigate('/register')} />
        </div>
    </div>
  )
}

export default Login;