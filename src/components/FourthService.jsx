import React from 'react';
import tires from '../assets/tires.png';
import '../styles/FourthService.css';

const FourthService = () => {
  return (
    <>
      <div className='firstservice-container py-4'>
        <div className='firstservice-card container d-sm-flex gap-5'>
          <div className='firstservice-content flex-wrap d-flex flex-column justify-content-center'>
            <h3 className=''>Tires & Tubes Manufacturing</h3>
            <p>
              General Tyres & Tubes Co. Ltd Enugu, manufacturers of high quality
              tyres & Tubes. The plant has a production capacity of about 8,000
              pieces of motorcycle tyres daily and 13,000 tubes daily.
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
            <img src={tires} alt='' className='first-img d-none d-lg-block' />
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthService;
