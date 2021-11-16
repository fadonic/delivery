import './newTicket.css';
import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { register  } from '../../context/ticketContext/apiCalls';
import {TicketContext} from '../../context/ticketContext/TicketContext'
import { AuthContext } from '../../context/authContext/AuthContext';


const NewTicket = () => {
  const [newTicket, setNewTicket] = useState(null)
  const [newFile, setNewFile] = useState(null)
  const {dispatch} = useContext(TicketContext)
  const {user} = useContext(AuthContext)
  const history = useHistory()
  
  const handleChange = (e)=>{
    let meta = e.target.name;
    let value = e.target.value
    setNewTicket(prev=>{
      return {...prev, [meta]:value, userId:user._id}
    })
  }

  
  const handleSubmit = (e)=>{
    e.preventDefault()
    register(newTicket, newFile, dispatch)
    history.push("/tickets")
  }
  return (
    <div className="new__ticket">
     <div className="auth__container">
      <div className="ticket__data">
        <h2 className="text-center">Raise a New Issue</h2>
        <form className="ticket__form" onSubmit={handleSubmit} id="registerForm">
          <select type="select" name="type" className="form__input" placeholder="Type" onChange={handleChange}>
            <option>Select Type</option>
            <option value="1">Complain</option>
            <option value="2">Technical</option>
          </select>
          <input type="text" name="title" className="form__input" placeholder="Title" onChange={handleChange}/>
          <textarea type="text" name="message" className="form__input" placeholder="Type your issue" onChange={handleChange}/>
          <input type="file" className="form__input" name="supportingFile" onChange={(e)=>setNewFile(e.target.files[0])} />
          <button type="submit" className="form__button button">Submit</button>
        </form>
      </div>
     </div>
    </div>
  );
};

export default NewTicket;