import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{height:"40px",backgroundColor:"#191825"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <h1 style={{marginTop:"1px", color:"#FFF1DC",marginLeft:"2px"}}>DemoApp</h1>
            <button style={{height:"40px", backgroundColor:"transparent",border:"transparent",cursor:"pointer"}}><h2 style={{marginTop:"6px",fontSize:"20px",color:"#BDCDD6",marginRight:"2px"}}>LogOut</h2></button>
        </div>
    </div>
  )
}

export default Navbar