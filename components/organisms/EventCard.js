import React from 'react';

const EventCard = ({ event }) => {
  const { title, description, date, location } = event;

  return (
    <div className="card p-3 mb-3 w-50">
        <div class="card-header">
            <div class="card-title">
            <h3 className="event-title">{title}</h3>
        <p className="event-description">{description}</p>
            </div>
        </div>
      <div className="card-body">
        <div class="row">
      <div class="col">
      <div className="event-details">
          <p className="event-date">
            <strong>Date:</strong> {date}
          </p>
          <p className="event-location">
            <strong>Location:</strong> {location}
          </p>
        </div>
      </div>
      <div class="col mt-2">
      <div className="event-actions">
          <button className="btn btn-sm btn-primary mr-2">Share Event</button>
          <button className="btn  btn-sm btn-success mr-2">I'm Interested</button>
          <button className="btn btn-sm  btn-info">Participate</button>
        </div>
      </div>
      </div>
       
      </div>
    </div>
  );
};

export default EventCard;
