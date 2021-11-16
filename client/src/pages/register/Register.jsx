import React, {useState, useContext} from 'react';
import './register.css'
import { Link,useHistory } from 'react-router-dom';
import { register,  } from '../../context/authContext/apiCalls';
import {AuthContext} from '../../context/authContext/AuthContext'

const Register = () => {
  const [newUser, setNewUser] = useState(null)
  const {dispatch} = useContext(AuthContext)
  const history = useHistory()

  const handleChange = (e)=>{
     let meta = e.target.name;
     let value = e.target.value
     setNewUser(prev=>{
       return {...prev, [meta]:value}
     })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    register(newUser, dispatch)
    history.push("/login")
  }
  return (
    <section className="register container section" id="register">
        <h4 className="subtitle text-center">
          Want to Get Started?
        </h4>
        <h2 className="section__title-center text-center">
          Create An Account
        </h2>
       
        <div className="register__container grid">
          <img src="assets/img/mi-ilustracion-register.jpg" alt="" />
          <div className="register__data">
            <form action="" className="register__form" onSubmit={handleSubmit} id="registerForm">
              <input type="text" name="firstname" className="form__input" placeholder="First name" onChange={handleChange}/>
              <input type="text" name="middlename" className="form__input" placeholder="Middlename" onChange={handleChange}/>
              <input type="text" name="lastname" className="form__input" placeholder="Last name" onChange={handleChange}/>
              <input type="text" name="email" className="form__input" placeholder="Email" onChange={handleChange}/>
              <input type="text" name="username" className="form__input" placeholder="Username" onChange={handleChange}/>
              <input type="text" name="password" className="form__input" placeholder="Password" onChange={handleChange}/>
              <button className="form__button button">Register</button>
              <p>I have an Account? <Link to="/login">Login</Link></p>
            </form>
          </div>
        </div>

    </section>

  );
};

export default Register;