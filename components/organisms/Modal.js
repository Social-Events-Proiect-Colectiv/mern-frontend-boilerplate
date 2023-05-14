import React from 'react';

const Modal = ({ onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-dialog" onClick={handleModalClick}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Event</h5>
            <button type="button" className="close" onClick={handleClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
            {/* Add a button for submitting the form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
