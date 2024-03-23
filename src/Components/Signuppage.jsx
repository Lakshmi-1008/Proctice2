import { useState } from "react";

const Signuppage = () => {

    let [email,setemail]=useState("")
    let [password,setpassword]=useState("")
 
    function signup(){
        if(email=="abcd@gmail.com" && password=="1234"){
            alert("signup successfull")
        }
        else{
            alert("ivalid credentials")
        }
    }

    return ( 
       <div className="signup">
       email: <input   value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder="enter email here" /> <br />
      password: <input  value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="enter password" /> <br />
      <button onClick={signup}>Signup</button>
       </div>
     );
}
 
export default Signuppage;