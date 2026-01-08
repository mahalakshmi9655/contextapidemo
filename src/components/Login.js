import React from 'react'
//import  { useState } from 'react'
import { useContext } from 'react'
import { LoginContext } from '../context/Logincontext'

function Login() {
    const{setName,setProfileInfo}=useContext(LoginContext)
   // const [name,setName]=useState("")
   // const [pwd,setPwd]=useState("")
   // const [profileinfo,setProfileInfo]=useState(false)
   // const show=()=>{
     //   if(name==="mahalakshmi" && pwd==="pj@04")
       //     setProfileInfo(true)
        //else
          //  setProfileInfo(false)
    //}
  return (
    <div>
      <input type='text'onChange={(e)=>setName(e.target.value)} placeholder='enter name'></input><br></br>
      <input type='text' placeholder='enter password'></input><br></br>
      <input type='button' onClick={()=>setProfileInfo(true)}value="login"></input><br></br>
     {/* {(profileinfo && "valid user:"+name+"!")||"invalid user!!!"}*/}
    </div>
  )
}

export default Login
