import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types'
import './ticketItem.css'
import { Link } from 'react-router-dom';
import { CheckCircleOutlineOutlined } from '@material-ui/icons';
import axios from 'axios';
import { AuthContext } from '../../context/authContext/AuthContext';

const TicketItem = ({item}) => {
  const [ticketStatus, setTicketStatus] = useState(item.status)
  const {user} = useContext(AuthContext)

  const handleClose = async ()=>{
    try{
     const response =  await axios.patch(`/tickets/${item._id}`, {status:'closed'}, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
      }
    });

    setTicketStatus(response.data.status)

    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="ticket__item">
        <div className="ticket_info">
          <h3 className="ticket__item__title"><span className="ticket__id">{"#" + item.ticketId} - </span> {item.title}</h3>
          <span className="date"><span>Last updated </span>{new Date(item.createdAt).toLocaleString()}</span>
          <span className={"badge__label badge__label-small " + (ticketStatus === 'open' ? 'danger' : 'closed')}>
            {ticketStatus}
          </span>
          {user.isAdmin && <CheckCircleOutlineOutlined className="icon" onClick={handleClose}/>}
        </div>
          <Link to={{pathname: "/tickets/" + item._id, ticket:item}} className="more">
             Details
          </Link>
        </div>
       
  );
};

TicketItem.propTypes = {
  item: PropTypes.object,
  user:PropTypes.string
}

export default TicketItem;