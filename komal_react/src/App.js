import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './Home.js';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import {Error_404} from'./404_error.js';
function App() {
  let Name='komal' 
 function updatedata(){
  Name='Komal Kumari'
  alert(Name)
}

 return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route exact path="login" element={<LoginForm></LoginForm>}/>
    <Route exact path="register" element={<RegisterForm/>}></Route>
    <Route  exact path="*" element={<Error_404></Error_404>}></Route>
  </Routes>
</BrowserRouter>
  );
 }
export default App;
