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
    <div className="row justify-content-center">
      {events.map((event) => (
        <div className="col-12 col-md-6 col-lg-4 mb-4" key={event.id}>
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
