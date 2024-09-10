import React from 'react';
import secondService from '../assets/secondservice.png';

const SecondService = () => {
  return (
    <>
      <div className='firstservice-container py-4'>
        <div className='firstservice-card container d-sm-flex gap-5'>
          <div className='firstservice-content flex-wrap d-flex flex-column justify-content-center'>
            <h3 className=''>Plastic Manufacturing</h3>
            <p>
              Innoson Technical & Industrial Co. Ltd manufactures high quality
              household and industrial plastics, health & safety accessories,
              storage containers, fixtures & fittings, electrical components &
              accessories. Plastic products manufactured include; plastic
              chairs, tables, trays, plates, spoons, cups, jerry cans of
              different sizes and many other allied products.
            </p>
            <button className='service-button text-center'>
              Learn More{' '}
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20px'
                  viewBox='0 -960 960 960'
                  width='20px'
                  fill='#ffffff'
                >
                  <path d='m576-288-51-51 105-105H192v-72h438L525-621l51-51 192 192-192 192Z' />
                </svg>
              </span>
            </button>
          </div>
          <div>
            <img
              src={secondService}
              alt=''
              className='first-img d-none d-lg-block'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondService;
