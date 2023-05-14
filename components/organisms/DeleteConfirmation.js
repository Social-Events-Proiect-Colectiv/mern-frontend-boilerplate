import React from 'react';

const DeleteConfirmation = ({ event, onSubmit }) => {
  const handleDelete = () => {
    onSubmit(event);
  };

  return (
    <div>
      <p>Are you sure you want to delete this event?</p>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={onSubmit}>No</button>
    </div>
  );
};

export default DeleteConfirmation;
