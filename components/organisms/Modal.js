import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div>
      <div className="modal" onClick={onClose}></div>
      <div className="modal-content">
        {children}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
