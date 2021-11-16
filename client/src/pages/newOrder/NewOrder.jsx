import './newOrder.css';
import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { register  } from '../../context/itemContext/apiCalls';
import {ItemContext} from '../../context/itemContext/ItemContext'
import { AuthContext } from '../../context/authContext/AuthContext';

const NewOrder = () => {
  const [newItem, setNewItem] = useState(null)
  const {dispatch} = useContext(ItemContext)
  const {user} = useContext(AuthContext)
  const history = useHistory()
  
  const handleChange = (e)=>{
    let meta = e.target.name;
    let value = e.target.value
    setNewItem(prev=>{
      return {...prev, [meta]:value, userId:user._id}
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    register(newItem, dispatch)
    history.push("/myOrders")
  }
  return (
    <div className="new__order">
     <div className="auth__container">
      <div className="order__data">
        <h2>Order A New Delivery</h2>
        <form action="" className="order__form" onSubmit={handleSubmit} id="registerForm">
        <textarea  name="itemDescription" cols="30" rows="10" className="form__input" placeholder="What are the key information of this item? e.g name, modal etc" onChange={handleChange}>
          </textarea>
          <select type="select" name="type" className="form__input" placeholder="Type" onChange={handleChange}>
            <option>Select Type</option>
            <option value="light">Light Item</option>
            <option value="heavy">Heavy Item</option>
          </select>
          <select type="select" name="weight" className="form__input" placeholder="weight" onChange={handleChange}>
            <option>Select Item Weight</option>
            <option value="1">1kg - 5kg</option>
            <option value="2">6kg - 20kg</option>
            <option value="3">21kg - 50kg</option>
          </select>
          <input type="text" name="pickUpLocation" className="form__input" placeholder="Pick up Location" onChange={handleChange}/>
          <input type="text" name="deliveryAddress" className="form__input" placeholder="Delivery Address" onChange={handleChange}/>
          <input type="text" name="contactPerson" className="form__input" placeholder="Contact Person" onChange={handleChange}/>
          <input type="text" name="contactPhone1" className="form__input" placeholder="Contact Phone number" onChange={handleChange}/>
          <input type="text" name="contactPhone2" className="form__input" placeholder="Alternative Phone Number" onChange={handleChange}/>
          <button className="form__button button">Submit</button>
        </form>
      </div>
     </div>
    </div>
  );
};

export default NewOrder;