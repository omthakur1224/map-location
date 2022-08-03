import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './components/Nav'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      "display":"flex",
      "flexDirection":"column",
      "justifyContent":"center",
      "alignContent":"center"
    }} >
          <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>} />
        </Routes>
    </div>
  )
}

export default App
