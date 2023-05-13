import React from 'react';
import Link from 'next/link';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header2';

function Register() {
  return (
    <div>
      <Header />

      <div className="container-fluid p-3 my-5 h-custom">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2>Register</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control form-control-lg" id="email" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control form-control-lg" id="password" />
              </div>
              <div className="text-center text-md-start mt-4 pt-2">
                <button className="btn btn-primary px-5" type="submit">Register</button>
                <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <Link href="/login">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Register;
