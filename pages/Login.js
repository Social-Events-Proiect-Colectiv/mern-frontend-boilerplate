import React from 'react';
import Link from 'next/link';
import Header from '../components/organisms/Header2';
import Footer from '../components/organisms/Footer';
function Authentication() {
  return (
    <div>
    <Header/>
    <div className="container-fluid p-3 my-5 h-custom">
      <div className="row">
        <div className="col-10 col-md-6">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid rounded-circle" alt="Sample image" />
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <a href="#!" className="me-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="me-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="me-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control form-control-lg" id="email" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control form-control-lg" id="password" />
          </div>
          <div className="d-flex justify-content-between mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
            </div>
            <Link href="/forgot-password">Forgot password?</Link>
          </div>
          <div className="text-center text-md-start mt-4 pt-2">
            <button className="btn btn-primary px-5" type="button">Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link href="/register">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Authentication;
