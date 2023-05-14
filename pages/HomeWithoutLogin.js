import React from 'react';
import Header2 from '../components/organisms/Header2';
import Footer from '../components/organisms/Footer';
import EventsPage from './EventsPage';
import dinnerImage from '../images/dinner.jpg';

const HomeWithoutLogin = () => {
  return (
    <div>
      <section style={{ backgroundImage: 'linear-gradient(to left, #c6ffdd, #fbd786, #f7797d)' }}>
        <div className="container">
          <h1>Welcome to our Events App!</h1>
          <p>Discover and join exciting events happening near you.</p>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget sodales urna, in vestibulum turpis. Aliquam aliquet diam ac neque consequat, nec consequat tellus lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam sem nisi, feugiat eu venenatis in, tincidunt id neque. Nullam ultricies euismod nisl vitae lacinia.</p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Features</h2>
          <ul>
            <li>Discover a wide range of events</li>
            <li>Join events and connect with like-minded people</li>
            <li>Create and manage your own events</li>
            <li>Get notifications about upcoming events</li>
          </ul>
        </div>
      </section>

      <EventsPage />

    </div>
  );
}

export default HomeWithoutLogin;
