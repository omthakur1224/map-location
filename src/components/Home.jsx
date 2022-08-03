import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

function Home(){

  const {Auth,setAuth}=useContext(AuthContext);
  console.log("auth",Auth)
  return (

    <> 
      {
        !Auth?
        <h1 style={{'textAlign':'center'}}>You are not logged in</h1>
        :
        <h1 style={{'textAlign':'center'}}>you are authrised user</h1>

      }


      </>
  )
}

export default Home