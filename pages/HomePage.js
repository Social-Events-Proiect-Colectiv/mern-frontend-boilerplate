import React from 'react';
import Header2 from '../components/organisms/Header2';
import Footer from '../components/organisms/Footer';
import EventCard from './/EventsPage';
import EventsPage from './/EventsPage';

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

      <section className="hero">
        <div className="container">
          <p>Discover and join exciting events happening near you.</p>
        </div>
      </section>

     <EventsPage/>

    </div>
  );
};

export default HomePage;
