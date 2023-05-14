import React, { useState } from 'react';
import Link from 'next/link';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput} from 'mdb-react-ui-kit';
import Header2 from '../components/organisms/Header2';
import Footer from '../components/organisms/Footer';
import axios from 'axios';
//nu umblati la ce ii in afara functiei return()

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/forgot-password', { email });
      console.log(response.data);
    } catch (error) {
      console.error('Error during password recovery:', error);
    }
  };

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Header2 />
      <main className="container my-auto">
        <form className="p-5 mx-auto card" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Forgot Password</h2>
          <MDBInput 
            wrapperClass='mb-4' 
            label='Email address' 
            id='formControlLg' 
            type='email' 
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' type="submit">Submit</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">
            Remembered your password? 
            <Link href="/login">
              Login
            </Link></p>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default ForgotPassword;
