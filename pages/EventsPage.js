import React, { useEffect, useState } from 'react';
import Header from '../components/organisms/Header2';
import Footer from '../components/organisms/Footer';
import EventCard from '../components/organisms/EventCard';
//nu umblati la ce ii in afara functiei return()


const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <section className="events">
        <div className="container scroll">
          <h2>Upcoming events</h2>
          <div className="row justify-content-center">
            {events.map((event) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={event._id}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
