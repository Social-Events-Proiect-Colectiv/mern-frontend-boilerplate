const Footer = () => {
  return (
    <footer 
      className="footer" 
      style={{ 
        backgroundImage: 'linear-gradient(to right, #ffecd2, #fcb69f)', 
        padding: '20px 0',
        color: 'white',
        marginTop: 'auto' 
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Dan, Deea, Clau, Nadia. All Rights Reserved.
            </p>
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="/about" style={{ color: 'white' }}>About</a>
              </li>
              <li className="list-inline-item">
                <a href="/contact" style={{ color: 'white' }}>Contact</a>
              </li>
              <li className="list-inline-item">
                <a href="/privacy-policy" style={{ color: 'white' }}>Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="/terms-of-service" style={{ color: 'white' }}>Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
