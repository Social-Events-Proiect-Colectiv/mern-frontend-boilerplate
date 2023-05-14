import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/organisms/Header2';
import Footer from '../components/organisms/Footer';
import axios from 'axios';

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
    <div>
      <Header />
      <form className="container-fluid p-3 my-5 h-custom" onSubmit={handleSubmit}>
        {/* ... rest of your HTML ... */}
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
        {/* ... rest of your HTML ... */}
        <div className="text-center text-md-start mt-4 pt-2">
          <button className="btn btn-primary px-5" type="submit">
            Login
          </button>
          <p className="small fw-bold mt-2 pt-1 mb-2">
            Don't have an account? <Link href="/register">Register</Link>
          </p>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Authentication;
