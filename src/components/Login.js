import React from 'react'
//import  { useState } from 'react'
import { useContext } from 'react'
import { LoginContext } from '../context/Logincontext'

function Login() {
    const{name,setName,pwd,setPwd,profileinfo,setProfileInfo}=useContext(LoginContext)
    //const [name,setName]=useState("")
   //const [pwd,setPwd]=useState("")
    //const [profileinfo,setProfileInfo]=useState(false)
   const show=()=>{
      if(name==="mahalakshmi" && pwd==="pj@04")
            setProfileInfo(true)
        else
            setProfileInfo(false)
    }
  return (
    <div>
      <input type='text'onChange={(e)=>setName(e.target.value)} placeholder='enter name'></input><br></br>
      <input type='text'onChange={(e)=>setPwd(e.target.value)} placeholder='enter password'></input><br></br>
      <input type='button' onClick={()=>show()}value="login"></input><br></br>
      {profileinfo===false && <font color='red'>Invaliduser!!!</font>}
    </div>
  )
}

export default Login
