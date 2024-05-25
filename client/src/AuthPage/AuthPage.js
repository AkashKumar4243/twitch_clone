import React, { useState } from 'react'
import Login from '../component/Login/Login';
import Register from '../component/Register/Register';

const AuthPage = () => {

  const [islogin,setIslogin] = useState(true);

  const handleAuthPageToggle = () => {
    setIslogin(prev => !prev)
  }

  return (
    <div>
    {islogin ? <Login switchAuthHandler={handleAuthPageToggle}/> :
     <Register switchAuthHandler={handleAuthPageToggle}/>}</div>
  )
}

export default AuthPage