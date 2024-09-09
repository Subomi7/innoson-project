import React from 'react';
import navLogo from '../assets/logo.png';
import '../styles/Navbar.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menuLogo from '../assets/icon-menu.svg';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className='container py-2 d-flex justify-content-between'>
        <div className='d-flex align-items-center gap-2'>
          <img src={navLogo} alt='nav-ligo' className='img-fluid' />
          <h2 className='d-none d-md-block'>Innoson Group</h2>
        </div>
        <ul className='d-none d-lg-flex align-items-center gap-5 list-unstyled'>
          <li>Home</li>
          <li>Companies</li>
          <li>Products</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
        {/* offcanvas */}
        <div className='d-md-block d-lg-none mt-2'>
          <div onClick={handleShow} className='d-lg-none'>
            <img src={menuLogo} alt='menu-icon' className='menu-img' />
          </div>

          <Offcanvas show={show} onHide={handleClose} className='w-75'>
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className='d-flex flex-column gap-4 list-unstyled'>
                <li>Home</li>
                <li>Companies</li>
                <li>Products</li>
                <li>About</li>
                <li>Contacts</li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
