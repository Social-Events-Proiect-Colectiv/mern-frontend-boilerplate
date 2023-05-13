import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Company Name. All Rights Reserved.
            </p>
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="/about">About</a>
              </li>
              <li className="list-inline-item">
                <a href="/contact">Contact</a>
              </li>
              <li className="list-inline-item">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="/terms-of-service">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
