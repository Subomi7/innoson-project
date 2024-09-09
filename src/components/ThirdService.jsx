import React from 'react';
import Okada from '../assets/jincheng.png';

const ThirdService = () => {
  return (
    <>
      <div className='firstservice-container'>
        <div className='firstservice-card container d-sm-flex gap-5'>
          <div>
            <img src={Okada} alt='' className='first-img d-none d-lg-block' />
          </div>
          <div className='firstservice-content flex-wrap d-flex flex-column justify-content-center'>
            <h3 className=''>Motorcycle Manufacturing</h3>
            <p>
              Innoson Nigeria Limited Nnewi Manufactures motorcycles,
              tri-cycles, spare parts and accessories. We pioneered the first
              Made-in-Nigeria Motorcycle brand that sold for as low as N60,000.
              By year 2002, we successfully drove out tokunbo (foreign used)
              motorcycles out of Nigeria forever
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
        </div>
      </div>
    </>
  );
};

export default ThirdService;
