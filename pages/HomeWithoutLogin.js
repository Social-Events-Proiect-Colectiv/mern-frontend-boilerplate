import React from 'react';
import Header2 from '../components/organisms/Header2';
import Footer from '../components/organisms/Footer';
import EventsPage from './EventsPage';
//nu umblati la ce ii in afara functiei return()

const HomeWithoutLogin = () => {
  return (
    //bagati niste imagini aici unde ii src="..."
    //defapt jucati-va cu layoutu de la toata pagina faceti-o sa arate mai bine
    <div>
      <section
        style={{
          background: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)',
        }}
      >
        <div className="container">
          <h1>Welcome to our Events App!</h1>
          <p>Discover and join exciting events happening near you.</p>
        </div>
      </section>
      <div class="card mb-3">
        
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <img class="card-img-bottom" src="..." alt="Card image cap"/>
</div>

      <section
        className="about card"
        style={{
          background: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)',
        }}
      >
       
      </section>

      <section
        className="features card mt-2"
        style={{
          background: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)',
        }}
      >
        <div class="row">
          <div class="col">
        <div className="container card mt-5 mb-5 ">
          <h2>Features</h2>
          <ul>
            <li>Discover a wide range of events</li>
            <li>Join events and connect with like-minded people</li>
            <li>Create and manage your own events</li>
            <li>Get notifications about upcoming events</li>
          </ul>
        </div>
        </div>
        <div class="col">

        <div className="container card mt-5 mb-5 ">
          <h2>Register to Access More Features</h2>
          <p>
            Unlock additional features by registering an account. Create and manage your own
            events, save your favorite events, and connect with other attendees.
          </p>
          <button className="btn btn-primary mb-3">Register Now</button>
        </div>
        </div>
        <div class="col"> <div className="container card mt-5 mb-5">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget sodales urna,
            in vestibulum turpis. Aliquam aliquet diam ac neque consequat, nec consequat tellus
            lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Nullam sem nisi, feugiat eu venenatis in, tincidunt id neque. Nullam
            ultricies euismod nisl vitae lacinia.
          </p>
        </div></div>
        </div>
      </section>

      <section
        className="register card mt-2"
        style={{
          background: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)',
        }}
      >
       
      </section>

      <section
        className="register card mt-2 mb-5"
        style={{
          background: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)',
        }}
      >
        <div className="container card mt-5 mb-5">
          <EventsPage />
        </div>
      </section>

      <Footer />
    </div>
  );
};
// in ultimu container se incarca <eventspage> -cardurile cu evenimente, ca sa schimbati layoutu la carduri trebuie sa schimbati din EventsPage sau din EventCard
export default HomeWithoutLogin;
