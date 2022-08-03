import axios from 'axios'
import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
function Login() {
    const [text,setText]=useState({});
    const navigate=useNavigate();
    const {Auth,setAuth}=useContext(AuthContext)
    const handleChange=(e)=>{
        console.log(e.target.id)
        setText({
            ...text,
           [ e.target.id]:e.target.value
        })
    }
    const handleLogin=()=>{
        console.log('clicked login')
        axios.post('http://localhost:8080/api/login',text)
        .then((res)=>{
            console.log(res.data)
            alert(res.data.message)
            setAuth(true)
            navigate('/home')
        })
        .catch((err)=>{
            alert('you are not register, sign up first')
            navigate('/signup')
        })
    }
  return (
    <div style={{
        "display":"flex",
        "flexDirection":"column",
        "gap":"20px",
        "width":"500px",
        "alignContent":"center",
        "alignItems":"center",
        "margin":"auto",
        "backgroundColor":"teal"
    }}>
        <input id='email' type="email" placeholder='Enter registerd Email' onChange={handleChange}/>
        <input id='password' type='password' placeholder='enter your password' onChange={handleChange}/>
        <button onClick={handleLogin}>LogIn</button>
    </div>
  )
}

export default Login