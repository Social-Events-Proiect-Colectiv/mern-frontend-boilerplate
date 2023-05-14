import React from 'react';

const EventCard = ({ event }) => {
  const { title, description, date, location } = event;

  return (
    <div className="card p-3 mb-3 w-100 bg-dark text-white">
      <i className="fa fa-utensils"></i>
        <div className="card-header">
        <div className="card-title">
          <h3 className="event-title">{title}</h3>
          <p className="event-description">{description}</p>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <div className="event-details">
              <p className="event-date">
                <strong>Date:</strong> {date}
              </p>
              <p className="event-location">
                <strong>Location:</strong> {location}
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="event-actions">
              <button className="btn btn-sm btn-primary mb-1" style={{width:'150px'}}>Share Event</button>
              <button className="btn btn-sm btn-success mb-1" style={{width:'150px'}}>I'm Interested</button>
              <button className="btn btn-sm btn-info" style={{width:'150px'}}>Participate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default EventCard;
