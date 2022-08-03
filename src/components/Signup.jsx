import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../contexts/AuthContext';
function Signup() {

    const [text,setText]=useState({});

    const {Auth,setAuth}=useContext(AuthContext)

    const navigate=useNavigate()

    const handleChange=(e)=>{
        setText({
            ...text,
            [e.target.id]:e.target.value
        })
    }

    const handleRegister=()=>{
        
        axios.post('http://localhost:8080/api/register',text)
        .then((res)=>{
            console.log(res.data)
            alert(res.data.message)
            setAuth(true);
            navigate('/home')
       })
       .catch((err)=>{
           alert(`you are either registered user or email not correct`)
           navigate('/signup')
       })
    }

  return (
    <div>
        <input id='name' type="text" placeholder='enter your name' onChange={handleChange} />
        <input id='email' type="email" placeholder='enter a valid email' onChange={handleChange} />
        <input id='password' type="password" placeholder='enter your passsword' onChange={handleChange} />
        <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Signup