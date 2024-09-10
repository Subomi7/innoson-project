import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <>
      <main className='hero-section d-flex flex-column align-items-start justify-content-center'>
        <div className='overlay-div'></div>
        <div className='container text-content'>
          <h2 className='container'>
            Crafting Africa's <br /> Roads Ahead
          </h2>
          <p className='container'>
            Our vehicle assembly line represents the essence of African
            <br />
            innovation. From rugged off-road explorers to sleek city cruisers,
            <br /> we assemble vehicles that traverse the varied landscapes of
            our <br /> beautiful continent
          </p>
        </div>
      </main>
    </>
  );
};

export default Hero;
