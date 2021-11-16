import React, { useContext, useEffect } from 'react';
import './dashboard.css'
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import {ItemContext} from '../../context/itemContext/ItemContext'
import { getItemsByUserId } from '../../context/itemContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';


const Dashboard = () => {

const {items, dispatch} = useContext(ItemContext)
const {user} = useContext(AuthContext)

useEffect(() => {
  dispatch(getItemsByUserId(user._id,dispatch))
}, [user._id, dispatch])


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
  width: 200,
  editable: true,
},
{
  field: 'contactPerson',
  headerName: 'Contact Person',
  width: 170,
  editable: true,
},

{
  field: 'contactPhone1',
  headerName: 'Contact No',
  width: 170,
  editable: true,
},
{
  field: 'deliveryStatus',
  headerName: 'Delivery Status',
  width: 200,
  editable: true,
  renderCell: (params)=>{
    return   <span className={"badge__label " + (params.value === 'Pending' ? 'danger' : 'closed')}>{params.value}</span>
  }
},
]

  return (
    <div className="dashboard">
      <div className="auth__container">
         <div className="row" style={{marginBottom:'50px'}}>
          <div className="dashboard__grid">
            <div className="dashboard__data">
            <h2 className="subtitle text-center">
                New Order
            </h2>
            <p className="dashboard__description">
              Lorem ipsum dolor sit amet consectetur, adipisicing
            </p>
            <Link to="/newOrder" className="button button__order">Start</Link>
          </div>

          <div className="all_orders dashboard__data flex-center">
            <h2 className="subtitle text-center">
                Track My Order
            </h2>
            <p className="dashboard__description">
              Lorem ipsum dolor sit amet consectetur, adipisicing
            </p>
            <Link to="/trackMyOrders" className="button button__order">Start</Link>
          </div>

         <div className="dashboard__data flex-end">
           <h2 className="subtitle text-center">
              Tickets
           </h2>
           <p className="dashboard__description">
             Lorem ipsum dolor sit amet consectetur, adipisicing
           </p>
           <Link to="/tickets" className="button button__order">Start</Link>
         </div>
          </div>
         </div> 
        <DataGrid
        rows={items}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        getRowId = { r => r._id}
      />
      </div>
    </div>
  );
};

export default Dashboard;