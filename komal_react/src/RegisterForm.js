import { useState } from "react";

export function RegisterForm(){
    const[name,setName] = useState("")
    const[email,setEmail]=useState("")
    const[nameErr,setNameErr]=useState("")
    const[password,setPassword]=useState("")

    function handalSubmitform(event){
       event.preventDefault()
       if(name === ""){
        setNameErr("");
       }
        if(email===""){
            alert("Enter your Email");
        }
        if(password===""){
            alert("Enter your password");
        }
    }

    return(
        <div className="">
            <h1 className="bg-danger text-light">Register Form</h1>
        <form onSubmit={handalSubmitform}>

         <label>Name:    </label>
        
         <input type="text" onChange={(e) => setName(e.target.value)} name="name"  />
         <span id="nameErr" style={{color : 'red'}}>{nameErr}</span>
      
         <label>Email id:  </label>
         <input type="text" onChange={(e)=> setEmail(e.target.value)} name="email"/>
        
         Password :<input type="password" onChange={(e)=>setPassword(e.target.value)}name="password"/>
         
     <label>User Name:</label>
    <input type="text"/>
         <button  className="btn btn-primary">Submit</button>

        </form>
        </div>
         )   
}