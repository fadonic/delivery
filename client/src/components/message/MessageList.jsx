import React from 'react';
import MessageItem from './MessageItem'

const MessageList = (props) => {
  return (
    <div className="message__list">
     {props.ticketMessages.map((message)=>{
       return <MessageItem key={message._id} message={message}/>
     })}
    </div>
  );
};

export default MessageList;