import React from 'react'

const Login = ({switchAuthHandler}) => {
  return (
    <div onClick={switchAuthHandler}>Login</div>
  )
}

export default Login