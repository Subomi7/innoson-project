import React from 'react';
import firstImage from '../assets/PmRtKHup-Innoson-G5 1.png';
import '../styles/Firstservice.css';
const FirstService = () => {
  return (
    <div className='firstservice-container'>
      <div className='firstservice-card container d-sm-flex gap-5'>
        <div>
          <img src={firstImage} alt='' className='first-img d-none d-lg-block' />
        </div>
        <div className='firstservice-content flex-wrap d-flex flex-column justify-content-center'>
          <h3 className=''>Automobile Manufacturing</h3>
          <p>
            Innoson Vehicle Manufacturing [IVM] introduces automotive products
            from China, Japan and Germany. Our product line includes heavy duty
            vehicles, middle and high level buses, special environment friendly
            vehicles. The company carries out optimization design and assembly
            according to African road condition so as produce suitable products
            at affordable prices.
          </p>
          <button className='service-button text-center'>Learn More <span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="m576-288-51-51 105-105H192v-72h438L525-621l51-51 192 192-192 192Z"/></svg></span></button>
        </div>
      </div>
    </div>
  );
};

export default FirstService;
