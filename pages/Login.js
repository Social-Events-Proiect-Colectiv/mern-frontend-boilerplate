import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/organisms/Header2';
import Footer from '../components/organisms/Footer';
import axios from 'axios';
//nu umblati la ce ii in afara functiei return()

function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      console.log(response.data);

      // Redirect based on user type
      const userType = response.data.type;
      if (userType === 'admin') {
        router.push('/HomePageAdmin');
      } else if (userType === 'user') {
        router.push('/HomePage');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
<div 
    className="d-flex flex-column min-vh-100"
    // bagati un backgroudn image aici gen cum e pe aboutus
    style={{
        backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }}
>      <Header />
      <main className="container my-auto">
        <form className="p-5 mx-auto card" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center text-md-start mt-4 pt-2">
            <button className="btn btn-primary px-5" type="submit">
              Login
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-2">
              Don't have an account? <Link href="/register">Register</Link>
            </p>
            <p className="small fw-bold mt-2 pt-1 mb-2">
            <Link href="/forgot-password">I'm dumb. I've forgotten my details</Link>
            </p>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Authentication;
