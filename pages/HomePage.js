import React from 'react';
import Header2 from '../components/organisms/Header2';
import Footer from '../components/organisms/Footer';
import EventCard from './/EventsPage';
import EventsPage from './/EventsPage';
import Sidebar from '@/components/organisms/sidebar';
//nu umblati la ce ii in afara functiei return()

const HomePage = () => {
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
      <Header2 />
      <section style={{ backgroundImage: 'linear-gradient(to left, #c6ffdd, #fbd786, #f7797d)' }}>
        <div className="container">
          <h1>Welcome to our Events App!</h1>
          <p>Discover and join exciting events happening near you.</p>
        </div>
      </section>

      <section className="events card">
        <div className="container card">
          <h2>Upcoming Events</h2>
          <div className="row">
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
}

export default HomePage;