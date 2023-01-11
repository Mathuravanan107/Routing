import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home';
import Login from './Login';

const Routing = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/Home' element={<Home/>}></Route>  
            <Route path='*' element={<h2>Page is Not found!</h2>} ></Route>   
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing