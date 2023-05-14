import React, {Component} from 'react';
import Link from 'next/link';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header2';
import nookies from 'nookies';
//nu umblati la ce ii in afara functiei return()

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state= {
            fname:"",
            lname:"",
            email:"",
            password:"",
            type:"user",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      e.preventDefault();
      const { fname, lname, email, password, type } = this.state;
      console.log(fname, lname, email, password,type);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
          type,
        }),
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data); // Log the response data
      })
      .catch((error) => {
        console.error(error);
      });
    }
    
    render() {
      return (
          <div className="d-flex flex-column min-vh-100" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
              <Header />

              <div className="container my-5">
                  <div className="row justify-content-center">
                      <div className="col-md-6">
                          <div className="card py-5 px-4">
                              <h2 className="text-center mb-4">Register</h2>
                              <form onSubmit={this.handleSubmit}>
                                  <div className="mb-4">
                                      <label htmlFor="fname" className="form-label">First Name</label>
                                      <input type="text" className="form-control" required id="fname" onChange={(e) => this.setState({ fname: e.target.value })} />
                                  </div>
                                  <div className="mb-4">
                                      <label htmlFor="lname" className="form-label">Last Name</label>
                                      <input type="text" className="form-control" required id="lname" onChange={(e) => this.setState({ lname: e.target.value })} />
                                  </div>
                                  <div className="mb-4">
                                      <label htmlFor="email" className="form-label">Email address</label>
                                      <input type="text" className="form-control" required id="email" onChange={(e) => this.setState({ email: e.target.value })} />
                                  </div>
                                  <div className="mb-4">
                                      <label htmlFor="password" className="form-label">Password</label>
                                      <input type="password" className="form-control" required id="password" onChange={(e) => this.setState({ password: e.target.value })} />
                                  </div>
                                  <div className="text-center mt-4">
                                      <button className="btn btn-primary px-5" type="submit">Register</button>
                                      <p className="small fw-bold mt-2">Already have an account? <Link href="/login">Login</Link></p>

                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>

              <Footer />
          </div>
      );
  }
}
