import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
export default function HomePage() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
        alt='...'>
        <h5>Welcome to our website!</h5>
        <p>This site was created with the aim of providing a better organization of events within companies</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        alt='...'>
        <h5>Facilities</h5>
        <p>Through our application you can create an event to which you can invite your colleagues. Also, you can receive invitations from friends, and you have the possibility to confirm your presence or refuse.</p>
        <p>Create a simple account and enjoy future events!</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'>
        <h5>Contact</h5>
        <p>071234567890</p>
        <p>or</p>
        <p>CompanyEvents@yahoo.com</p>

      </MDBCarouselItem>
    </MDBCarousel>
  )
}