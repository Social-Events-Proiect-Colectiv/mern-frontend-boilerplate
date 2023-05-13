import React from 'react';
import Header from '../components/organisms/Header2';
import Footer from '../components/organisms/Footer';
import EventCard from '../components/organisms/EventCard';

const EventsPage = () => {
  // Sample event data
  const events = [
    {
      id: 1,
      title: 'Event 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-06-01',
      location: 'New York, NY',
    },
    {
      id: 2,
      title: 'Event 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-06-15',
      location: 'San Francisco, CA',
    },
    {
      id: 3,
      title: 'Event 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-07-01',
      location: 'Chicago, IL',
    },
  ];

  return (
    
    <div>

      <section className="events">
        <div className="container">
          <h2>Upcoming events</h2>
          <div className="event-cards row justify-content-center">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default EventsPage;
