import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import {stores} from '../dataStore/store';
import {Link} from 'react-router-dom'
function Home(){
  let data=stores.features;
  console.log(data)
  const {Auth,setAuth}=useContext(AuthContext);
  console.log("auth",Auth)
  return (

    <> 
      {
        !Auth?
        <h1 style={{'textAlign':'center'}}>You are not logged in</h1>
        :
       
        data.map((ele,index)=>
        <Link to={`/map/${ele.geometry.coordinates}`} >
        <div key={index} style={{
          "display":"flex",
          "justifyContent":"space-around",
          "backgroundColor":"lightcoral",
          "margin":"20px",
          "borderRadius":"20px"
        }}>
       <h1>{ele.properties.city}, <span>{ele.properties.state}</span></h1>
          
          <h1>{ele.properties.country}</h1>
        </div> 
        </Link>
        )

      }


      </>
  )
}

export default Home