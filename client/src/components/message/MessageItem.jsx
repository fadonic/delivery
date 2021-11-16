import React from 'react';
import { Person } from '@material-ui/icons';

const MessageItem = ({message}) => {
  return (
    <div className="ticketDetails__data">
    <div className="ticketDetails__data__header">
      <Person className="ticketDetails__Icon"/>
      <div className="ticketDetails_userinfo">
        <span className="name">{message.sender.firstname}</span>
        <span className="role">{message.sender.isAdmin ? "Support" : "Guest"}</span>
      </div>
      <small className="date">{new Date(message.createdAt).toLocaleString()}</small>
    </div>
    <div className="ticketDetails__data__body">
      <p className="message">{message.message}</p>
      <span className={"badge__label badge__label-small " + (message.ticket.status === 'open' ? 'danger' : 'closed')}>{message.ticket.status}</span>
    </div>
  </div>
  );
};

export default MessageItem;