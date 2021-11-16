import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import {logout} from '../../context/authContext/AuthActions'
import './authHeader.css'
import { useHistory } from 'react-router';
import {NavLink} from 'react-router-dom'

const AuthHeader = () => {
  const {dispatch, user} = useContext(AuthContext)
  const history = useHistory()

  const handleLogout = (e)=>{
    e.preventDefault()
    dispatch(logout())
    history.push("/")
  }
  return (
    <div className="auth__header">
      <div className="nav container_max">
         <a href="/dashboard" className="logo">DELIVERY</a>
         <div className="nav__menu">
           <ul className="nav__list">
             <li className="nav__item">
               <NavLink to="/dashboard" className="nav__link text-bold">Welcome: {user.firstname}</NavLink>
             </li>
             <li className="nav__item">
               <NavLink to="/dashboard" className="nav__link">Settings</NavLink>
             </li>
             <li className="nav__item">
               <button className="nav__link nav__link-btn" onClick={handleLogout}>Logout</button>
             </li>
           </ul>
         </div>
      </div>
    </div>
  );
};

export default AuthHeader;