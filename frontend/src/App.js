import React from 'react';
import { BrowserRouter,  Routes, Route,   } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Reset from './pages/auth/Reset';
import Forgot from './pages/auth/Forgot';
import axios from 'axios';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


axios.defaults.withCredentials=true
const App = () => {
  return (    
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot' element={<Forgot/>}/>
      <Route path='/resetPassword/:resetToken' element={<Reset/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;