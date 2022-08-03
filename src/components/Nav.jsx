import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div style={{
        "display":"flex",
        "justifyContent":"space-around",
        "backgroundColor":"skyblue"
    }} >
         <Link to={'/home'} >
            <ul>Home</ul>
        </Link>
        <Link to={'/login'} >
            <ul>Login</ul>
        </Link>
        <Link to={'/signup'}>
            <ul>SignUp</ul>
        </Link>
    </div>
  )
}

export default Nav