 import {loginURL} from '/FuzzyLogic' //..
 import { getTokenFromURL } from '/FuzzyLogic'; //.
 import React from 'react';

const Login = () => {
  const token = getTokenFromURL()
  console.log(token)
  
return (
  <div className="loginContainer">
    <h1>Login</h1>
    <button className="loginButton" href={loginURL}>login with fuzzy</button>
  </div>
  )
}

export default Login;

