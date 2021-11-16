import './sidebar.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { useHistory } from 'react-router';
import {NavLink} from 'react-router-dom'
import {logout} from '../../context/authContext/AuthActions'


const Siderbar = () => {
  const {dispatch, user} = useContext(AuthContext)
  const history = useHistory()

  const handleLogout = (e)=>{
    e.preventDefault()
    dispatch(logout())
    history.push("/")
  }
  return (
    <div className="sidebar">
     <div className="sidebar__menu">
     <ul className="sidebar__list">
        <li className="sidebar__item label">
          Menu
        </li>
        {user.isAdmin ? <li className="sidebar__item">
          <NavLink to="/idashboard" className="sidebar__link">
          Dashboard
          </NavLink>
        </li> : 
        <>
        <li className="sidebar__item">
          <NavLink to="/dashboard" className="sidebar__link">
          Dashboard
          </NavLink>
        </li> 
        <li className="sidebar__item">
          <NavLink to="/myOrders" className="sidebar__link">
           My Orders
          </NavLink>
        </li>

        <li className="sidebar__item">
          <NavLink to="/newOrder" className="sidebar__link">
           New Order
          </NavLink>
        </li>
        
        <li className="sidebar__item label">
          Profile
        </li>
        <li className="sidebar__item">
          <NavLink to="/trackMyOrders" className="sidebar__link">
            Track Order
          </NavLink>
        </li>
        
        </>
        }

        <li className="sidebar__item">
          <NavLink to="/tickets" className="sidebar__link">
            Tickets
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/dashboard" className="sidebar__link">
            Settings
          </NavLink>
        </li>

        <li className="sidebar__item label">
          Account
        </li>
        <li className="sidebar__item">
          <NavLink to="/dashboard" className="sidebar__link">
            Last Login
          </NavLink>
        </li>
        <li className="sidebar__item">
          <button to="/dashboard" className="sidebar__link nav__link-btn" style={{fontSize: 15}} onClick={handleLogout}>
            Logout
          </button>
        </li>
        
      </ul>
     </div>
    </div>
  );
};

export default Siderbar;