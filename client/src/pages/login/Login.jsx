import React, { useContext, useRef, useState } from 'react';
import './login.css'
import {Link} from 'react-router-dom'
import { login } from '../../context/authContext/apiCalls';
import {AuthContext} from '../../context/authContext/AuthContext'


const Login = () => {
  const [errorMessage, setErrorMessage] = useState("")
  const emailRef = useRef()
  const passowrdRef = useRef()
  const {error, dispatch} = useContext(AuthContext)

  
  const handleLogin = (e)=>{
    e.preventDefault()
    let user = {
      email:emailRef.current.value,
      password: passowrdRef.current.value
    }
    login(user, dispatch);
    setErrorMessage(error)
  }

  return (
    <section className="register container section" id="register">
        <h4 className="subtitle text-center">
          Want to Get Started?
        </h4>
        <h2 className="section__title-center text-center">
          Login to your account
        </h2>
       
        <div className="register__container grid">
          <img src="assets/img/mi-ilustracion-register.jpg" alt="" />
          <div className="register__data">
            {errorMessage && <span style={{color:'red', fontWeight: 'bold'}}>Invalid Login</span>}
            <form action="" className="register__form" id="registerForm">
              <input type="text" className="form__input" placeholder="Email" ref={emailRef}/>
              <input type="password" className="form__input" placeholder="Password" ref={passowrdRef}/>
              <button className="form__button button" onClick={handleLogin}>Login</button>
              <p>I don't an Account? <Link to="/register">Register</Link></p>
            </form>
          </div>
        </div>

    </section>

  );
};

export default Login;