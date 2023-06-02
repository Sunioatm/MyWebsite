import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLine} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-4">
            <h5>About Me</h5>
            <p>I am eagerly looking forward to gaining internship experience and am excited about the prospect of obtaining real-world knowledge to enhance my skills. Although I don't have prior work experience, I am determined to give my best effort and make the most of this opportunity for personal growth.</p>
          </div>
          <div className="col-lg-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Phone: 084-662-5020</li>
              <li>Email: sunioatm@gmail.com</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Follow Me</h5>
            <div className="d-flex flex-column">
              <a href="https://www.facebook.com/sunioatm" target="_blank" className="text-white" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faFacebookF}/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ศิวกร เสงี่ยมมหาศาล
              </a>
              <a href="https://www.instagram.com/sunioatm/" target="_blank" className="text-white" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faInstagram} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sunioatm
              </a>
              <a className="text-white" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faLine} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sun_siwakorn
              </a>

            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-dark text-center py-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="m-0">
                &copy; {new Date().getFullYear()} Your Website. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
