import React from 'react'
import { useParams } from 'react-router-dom'
function Map() {
    let {id}=useParams();
    console.log(id);
    const ACCESS_TOKEN = 'pk.eyJ1Ijoib210aGFrdXIxMjI0IiwiYSI6ImNsNXc3azh2MDBiMXozaW56dzZub3Y5MnUifQ.12VimV4yzVRdBB0K3S919g';
    
  return (
    <div>
        <h1 style={{
          "display":"flex",
          "justifyContent":"space-around"
        }}>
          <span>
            map coordinates 
          </span> 
          <span>
            {id}
          </span>
          </h1> 
    </div>
  )
}

export default Map
