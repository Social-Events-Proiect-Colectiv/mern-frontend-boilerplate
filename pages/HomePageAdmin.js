import React, { useEffect, useState } from 'react';
import Header from '../components/organisms/Header2';
import Footer from '../components/organisms/Footer';
import EventCard from '../components/organisms/EventCard';
import Modal from '../components/organisms/Modal';
import EventForm from '../components/organisms/EventForm';
//nu umblati la ce ii in afara functiei return()

const HomePageadmin = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  const handleEditEvent = async (eventId) => {
    try {
      const response = await fetch(`http://localhost:5000/events/${eventId}`);
      const event = await response.json();
      console.log('Event details:', event);
      // Add your logic to handle editing the event
    } catch (error) {
      console.error(`Error fetching event with ID ${eventId}:`, error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await fetch(`http://localhost:5000/events/${eventId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log('Delete event response:', data);
      // Add your logic to handle event deletion
    } catch (error) {
      console.error(`Error deleting event with ID ${eventId}:`, error);
    }
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCreateEvent = async (eventData) => {
    try {
      const response = await fetch('http://localhost:5000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
      const data = await response.json();
      console.log('Create event response:', data);
      // Add your logic to handle event creation
      setEvents((prevEvents) => [...prevEvents, data]);
      setShowModal(false);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div>
      <Header />

      <section className="events">
        <div className="container">
          <h2>Upcoming events</h2>

          <div className="text-right mb-3">
            <button className="btn btn-primary" onClick={handleToggleModal}>
              Create Event
            </button>
          </div>

          <div className="row justify-content-center">
            {events.map((event) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={event._id}>
                <EventCard event={event} />
                <div>
                  <button className="btn btn-info mr-2" onClick={() => handleEditEvent(event._id)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDeleteEvent(event._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && (
          <Modal onClose={handleToggleModal}>
            <EventForm onSubmit={handleCreateEvent} />
          </Modal>
        )}

        <Footer />
      </div>
    );
  };

  export default HomePageadmin;