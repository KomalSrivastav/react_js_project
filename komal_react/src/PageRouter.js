import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './Home.js';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import {Error_404} from'./404_error.js';
import {Contact_Us} from './Contact_Us.js';
export function PageRouter() {
 return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route exact path="login" element={<LoginForm/>} />
    <Route exact path="register" element={<RegisterForm/>} />
    <Route exact path="contact-us" element={<Contact_Us/>}/>
    <Route  exact path="*" element={<Error_404/>} />
  </Routes>
</BrowserRouter>
  );

 }
