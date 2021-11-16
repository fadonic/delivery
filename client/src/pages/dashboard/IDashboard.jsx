import React, { useContext, useEffect } from 'react';
import './idashboard.css'
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import {ItemContext} from '../../context/itemContext/ItemContext'
import { getItems } from '../../context/itemContext/apiCalls';
import { TicketContext } from '../../context/ticketContext/TicketContext';
import { getTickets } from '../../context/ticketContext/apiCalls';
import { ConfirmationNumberOutlined } from '@material-ui/icons';

const IDashboard = () => {
const {items, dispatch} = useContext(ItemContext)
const {tickets, dispatch:ticketsDispatch} = useContext(TicketContext)

useEffect(() => {
  dispatch(getItems(dispatch))
  dispatch(getTickets(ticketsDispatch))
}, [dispatch,ticketsDispatch])


const columns =  [{ field: '_id', headerName: 'ID', width: 100 },
{
  field: 'pickUpLocation',
  headerName: 'Pick Up Location',
  width: 180,
  editable: true,
},
{
  field: 'deliveryAddress',
  headerName: 'Delivery Address',
  width: 170,
  editable: true,
},
{
  field: 'contactPerson',
  headerName: 'Contact Person',
  width: 150,
  editable: true,
},

{
  field: 'contactPhone1',
  headerName: 'Contact',
  width: 140,
  editable: true,
},
{
  field: 'deliveryStatus',
  headerName: 'Status',
  width: 150,
  editable: true,
  renderCell: (params)=>{
    return   <span className={"badge__label " + (params.value === 'Pending' ? 'danger' : 'closed')}>{params.value}</span>
  }
},

{
  field: 'action',
  headerName: 'Action',
  width: 100,
  editable: true,
  renderCell: (params)=>{
    return   <ConfirmationNumberOutlined className="itemDeleteButton" />
  }
},
]

  return (
    <div className="dashboard">
      <div className="auth__container">
         <div className="row" style={{marginBottom:'50px'}}>
          <div className="dashboard__grid">
          
          <div className="all_orders dashboard__data flex-center">
            <h2 className="subtitle text-center">
                All Order
            </h2>
            <p className="dashboard__description">
              Lorem ipsum dolor sit amet consectetur, adipisicing
            </p>
            <Link to="/trackMyOrders" className="button button__order">
              {items.length}
            </Link>
          </div>

          <div className="all_orders dashboard__data flex-center">
            <h2 className="subtitle text-center">
                All Order
            </h2>
            <p className="dashboard__description">
              Lorem ipsum dolor sit amet consectetur, adipisicing
            </p>
            <Link to="/trackMyOrders" className="button button__order">
              {items.length}
            </Link>
          </div>

         <div className="dashboard__data flex-end">
           <h2 className="subtitle text-center">
              Tickets
           </h2>
           <p className="dashboard__description">
             Lorem ipsum dolor sit amet consectetur, adipisicing
           </p>
           <Link to="/tickets" className="button button__order">
             {tickets.length}
           </Link>
         </div>
          </div>
         </div> 
        <DataGrid
        rows={items}
        columns={columns}
        pageSize={6}
        checkboxSelection
        disableSelectionOnClick
        getRowId = { r => r._id}
      />
      </div>
    </div>
  );
};

export default IDashboard;