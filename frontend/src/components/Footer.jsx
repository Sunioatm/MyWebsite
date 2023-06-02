import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-4">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in turpis commodo scelerisque.</p>
          </div>
          <div className="col-lg-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Phone: 123-456-7890</li>
              <li>Email: info@example.com</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Follow Us</h5>
            <div className="d-flex flex-column">
              <a href="#!" className="text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#!" className="text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#!" className="text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-center py-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="m-0">
                &copy; {new Date().getFullYear()} Your Website. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
