import './trackMyOrders.css';
import React, { useContext, useEffect } from 'react';
import {  useHistory } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { ArrowBack } from '@material-ui/icons';
import {ItemContext} from '../../context/itemContext/ItemContext'
import {AuthContext} from '../../context/authContext/AuthContext'
import { getItemsByUserId } from '../../context/itemContext/apiCalls';


const TrackMyOrders = () => {
  const {items, dispatch} = useContext(ItemContext)
  const history = useHistory()
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
      return <span className={"badge__label " + (params.value === 'Pending' ? 'danger' : 'closed')}>{params.value}</span>
    }
  },
  ]
  return (
    <div className="track_my__order">
     <div className="auth__container">
      <div className="goback__btn__container">
       <button  className="mb-2 go__backBtn" onClick={()=>history.goBack()}>
         <ArrowBack className="icon"/>
          Back
         </button>
      </div>
      {items.map((item)=>{
        return item.deliveryStatus === 'Pending' && <div className="track__data" key={item._id}>
        <h2 className="track__order__Id">TicketID : {item._id}</h2>
        <h2>{item.itemDescription}</h2>
        <h3>Delivery Info: {item.deliveryAddress} - {item.contactPhone1}</h3>
        <p className="track_order__description">
         To: {item.contactPerson}
        </p>
        <small>Last Update: {new Date(item.updatedAt).toLocaleString()}</small>
       </div>
      })}
      
      <div className="div" style={{height:'100%'}}>
      <h2 className="table__title">All Orders</h2>
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
    </div>
  );
};

export default TrackMyOrders;