import './myOrders.css';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import {ItemContext} from '../../context/itemContext/ItemContext'
import {AuthContext} from '../../context/authContext/AuthContext'
import { getItemsByUserId } from '../../context/itemContext/apiCalls';


const MyOrders = () => {
  const {items, dispatch} = useContext(ItemContext)
  const {user} = useContext(AuthContext)

useEffect(() => {
  dispatch(getItemsByUserId(user._id, dispatch))
}, [user._id,dispatch])


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
    <div className="my__order">
     <div className="auth__container">
      <div className="neworder__btn__container">
       <Link to="/newOrder" className="button button__order mb-2">New Order</Link>
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

export default MyOrders;