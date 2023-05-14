import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Header2 from '../components/organisms/Header2';
import Footer from '../components/organisms/Footer';
import {MDBContainer, MDBInput, MDBBtn} from 'mdb-react-ui-kit';
//nu umblati la ce ii in afara functiei return()

function ResetPassword() {
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { token } = router.query;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:5000/reset/${token}`, {
        password,
      });

      console.log(response.data);
      router.push('/login');
    } catch (error) {
      console.error('Error during password reset:', error);
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
          <h2 className="text-center mb-4">Reset Password</h2>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <MDBInput
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center text-md-start mt-4 pt-2">
            <MDBBtn className="btn btn-primary px-5" type="submit">
              Reset Password
            </MDBBtn>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default ResetPassword;
