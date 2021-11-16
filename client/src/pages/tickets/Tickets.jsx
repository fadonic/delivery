import './tickets.css';
import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import {TicketContext} from '../../context/ticketContext/TicketContext'
import { getTickets } from '../../context/ticketContext/apiCalls';
import TicketItem from '../../components/ticketItem/TicketItem';
import { AuthContext } from '../../context/authContext/AuthContext';



const Tickets = () => {
  const {tickets, dispatch} = useContext(TicketContext)
  const {user} = useContext(AuthContext)
  const history = useHistory()

useEffect(() => {
  dispatch(getTickets(dispatch))
}, [dispatch])

const renderTicketItems = ()=>{
  return tickets.map((item)=>{
    return <TicketItem key={item._id} item={item}/>
  })
}

  return (
    <div className="my__tickets">
     <div className="auth__container">
      <div className="newticket__btn__container">
       {!user.isAdmin && <Link to="/newTicket" className="button button__order mb-2">New Ticket</Link>}
       <button  className="mb-2 go__backBtn"  onClick={()=>history.goBack()}>
         <ArrowBack className="icon"/>
          Back
       </button>
      </div>
      <div className="tickets__data">
       {renderTicketItems()}
      </div>
      
     </div>
    </div>
  );
};

export default Tickets;