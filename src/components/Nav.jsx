import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div style={{
        "display":"flex",
        "justifyContent":"space-around"
    }} > 
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