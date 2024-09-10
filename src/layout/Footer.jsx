import React from 'react';
import '../styles/Footer.css';
import footerImg from '../assets/images (6) 2.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import gmail from '../assets/gmail.png';

const Footer = () => {
  return (
    <>
      <footer className=''>
        <div className='container'>
          <div className='footer-container row align-items-center justify-content-between'>
            <div className='col-md d-flex flex-column justify-content-center gap-3'>
              <img src={footerImg} alt='innoson-logo' />
              <p>
                Subscribe to our newsletter to be one of the first to receive
                updates on Innoson Group
              </p>
              <h6>Newsletter Sign Up</h6>
              <div className='input-container d-flex align-items-center gap-2'>
                <input
                  type='email'
                  className='form-control form-container w-50'
                  id='exampleFormControlInput1'
                  placeholder='Email Address'
                />
                <div>
                  <button className='btn-container'>Email Address</button>
                </div>
              </div>
            </div>
            <div className='col-md d-flex flex-column justify-content-center gap-3'>
              <h5>Address</h5>
              <div>
                <h6>Head Office</h6>
                <p>
                  No 95 Owerri Road,P.O. Box 1068, Umudim, Nnewi,Anambra State
                </p>
              </div>
              <div>
                <h6>Lagos Office</h6>
                <p>
                  Plot 1 Block A,Amuwo Odofin Ind. Estate,Oshodi, Apapa,Lagos
                  State
                </p>
              </div>
            </div>
            <div className='col-md d-flex flex-column flex-wrap gap-4 socials'>
              <h5>Contact</h5>
              <div className='d-flex align-item-center gap-2'>
                <img src={facebook} alt='' />
                <p>@innosongroup</p>
              </div>
              <div className='d-flex align-item-center gap-2'>
                <img src={instagram} alt='' />
                <p>@innosongroup</p>
              </div>
              <div className='d-flex align-item-center gap-2'>
                <img src={gmail} alt='' />
                <p>sales@innosongroup.com</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className='copyright-container d-flex align-item-center justify-content-center py-4'>
          <p className=''>© 2016 Innoson Group of Companies</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
