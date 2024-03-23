import { useState } from "react";
import { useNavigate } from "react-router-dom";

 const Loginpage = () => {
   let [username,setusername]=useState("")
   let [password,setpassword]=useState("")
   let navigate=useNavigate()
   
   function  login(){
     if(username=="abcd" &&password=="1234" ){
        alert("login successfull")
        navigate("/Landingpage")
     }else{
        alert("invalid")
     }


   }

return(
    <div className="parent">
     Username: <input value={username} onChange={(e)=>{setusername(e.target.value)}} type="text" placeholder="enter the name" />  <br />
     Password: <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="password here " />
     <button onClick={login} >Submit</button>
    </div>
)

  
}
 
export default Loginpage;