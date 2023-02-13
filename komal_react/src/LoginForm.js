import {Header} from './Header';
import { useState } from 'react';
export function LoginForm(){


    // Set Data From Html Form 
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const[errorsMsg,setData]=useState("")
  async function Login(event){  
event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"uri":"","methodType":"","requestBody":""})
  };
    const response = await fetch('https://c4m6afus4m.execute-api.ap-south-1.amazonaws.com/test/api-gateway', requestOptions);
    const data = await response.json();
   // alert(data.errors.errors.methodType);
    setData(data.errors.errors.methodType);
}

  return(
    <html>
    <Header></Header>
<form onSubmit={Login}>
 
    <h2>Login Form</h2>
    <form>
      <label>Email: 
        <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
      </label>
      <label>Password:
        <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
      </label>
    </form>
    {errorsMsg}
<button>Submit</button>
<a href="LoginFOrm"></a>
</form>
</html>
    )
}

