import React, {Component} from 'react';
import Link from 'next/link';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header2';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state= {
            fname:"",
            lname:"",
            email:"",
            password:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      e.preventDefault();
      const { fname, lname, email, password } = this.state;
      console.log(fname, lname, email, password);
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
    
    render(){
  return (
    <div>
      <Header />

      <div className="container-fluid p-3 my-5 h-custom">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2>Register</h2>
            <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text" className="form-control form-control-lg" id="fname" 
                                onChange={(e) => this.setState({fname:e.target.value})}

                />
              </div>
              <div className="mb-4">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text" className="form-control form-control-lg" id="lname" 
                                onChange={(e) => this.setState({lname:e.target.value})}

                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                type="text" className="form-control form-control-lg" id="email"
                onChange={(e) => this.setState({email:e.target.value})}
                />
              </div>  
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control form-control-lg" id="password"
                                onChange={(e) => this.setState({password:e.target.value})}
                />
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
}
