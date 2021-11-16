import React from 'react';
import PropTypes from 'prop-types'
import './modal.css'

const Modal = (props) => {
  return (
   <>
    <div className="backdrop"></div>
    <div className="modal__container">
       <div className="modal__header">
          <h1>Add Message</h1>
       </div>
       <div className="modal__body">
         {props.children}
       </div>
       <div className='modal__actions'>
          <button className='btn' onClick={props.onCancel}>
            Cancel
          </button>
          <button className='btn' onClick={props.onSend}>
            Send
          </button>
      </div>
    </div>
   </>
  );
};

Modal.prototype = {
  props: PropTypes.object
}

export default Modal;