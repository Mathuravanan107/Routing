import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  const goToHome=()=>{
    navigate("/Home");
  }

  return (  
    <div>Login
        <Link to="/home">Home</Link>
        <button onClick={() =>goToHome()}>back to Home</button>
    </div>
  )
}

export default Login