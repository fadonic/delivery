import './ticketDetails.css';
import { Add, ArrowBack, Edit } from '@material-ui/icons';
import React, { useEffect, useState, useRef, useContext } from 'react'
import Modal from '../../components/modal/Modal'
import { useLocation, useHistory } from "react-router-dom";
import MessageList from '../../components/message/MessageList';
import axios from 'axios'
import { AuthContext } from '../../context/authContext/AuthContext';


const TicketDetails = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [ticketMessages, setTicketMessages] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const context = useContext(AuthContext)
  const titleRef = useRef()
  const messageRef = useRef()
  const location = useLocation()
  const history = useHistory()
  const ticketId = location.pathname.split("/")[2]
  const ticketStatus = ticketMessages.length > 0 && ticketMessages[0].ticket.status;
  
  const handleClick = (e)=>{
    setModalOpen(true)
  }

  const onCancel = ()=>{
    setModalOpen(false)
  }

  const onSend = async (e)=>{
    let messageObj = {title:titleRef.current.value, message: messageRef.current.value, sender: context.user._id, ticket: ticketId}
    try{
      const response = await axios.post(`/message/${ticketId}`, messageObj, {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
        }
      });

      const messageData = response.data
      console.log(messageData, ticketMessages)
      setTicketMessages([...ticketMessages, messageData].reverse())
      setModalOpen(false)
      
      }catch(err){
        console.log(err)
        setIsFetching(false)
      }
    }

  useEffect(()=>{
    const fetchMessage = async ()=>{
      try{
      const response = await axios(`/message/find/${ticketId}`, {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
        }
      });
      setTicketMessages(response.data)
      setIsFetching(false)
      }catch(err){
        console.log(err)
        setIsFetching(false)
      }
    }

    fetchMessage()
  }, [ticketId])

 
  return (
    <div className="my__tickets">
     {modalOpen && <Modal onCancel={onCancel} onSend={onSend}>
      <form>
       <div className="form__control">
        <label htmlFor="ticketId">Ticket ID</label>
        <input type="text" id="ticketId" value={ticketId} readOnly disabled/>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} autoFocus />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" ref={messageRef} cols="30" rows="10">
        </textarea>
       </div>
      </form>
     </Modal> }
     <div className="auth__container">
      <div className="goback__btn__container">
       <button className="mb-2 go__backBtn" onClick={()=>history.goBack()}>
         <ArrowBack className="icon"/>
          Back
       </button>
      </div>
      {ticketStatus === 'open' && <div className="ticketDetails__new" onClick={handleClick}>
          <div className="ticketDetails__new_left">
            <Edit className="icon" /> Reply
          </div>
          <div className="ticketDetails__right">
            <Add className="icon" />
          </div>
      </div>}
      {isFetching ? <p>Loading...</p> : <MessageList ticketMessages = {ticketMessages}/>}
      

      {/* <div className="ticketDetails__data">
        <div className="ticketDetails__data__header" style={{backgroundColor: "#f6fefd"}}>
          <Person className="ticketDetails__Icon"/>
          <div className="ticketDetails_userinfo">
            <span className="name">Mary Nanid</span>
            <span className="role">(Support)</span>
          </div>
          <small className="date">12/12/2010</small>
        </div>
        <div className="ticketDetails__data__body">
          <p className="message">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse odio ullam ducimus amet eum molestias nam quas facilis consequatur aperiam deleniti iure, asperiores doloremque eaque dicta obcaecati quae dolorum.</p>
          <span className="badge__label closed">Closed</span>
        </div>
      </div> */}


      
     </div>
    </div>
  );
};

export default TicketDetails;