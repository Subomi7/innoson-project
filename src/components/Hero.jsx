import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <>
      <main className='hero-section d-flex flex-column align-items-start justify-content-center'>
        <h2 className='container'>
          Crafting Africa's <br /> Roads Ahead
        </h2>
        <p className='container'>
          Our vehicle assembly line represents the essence of African
          <br />
          innovation. From rugged off-road explorers to sleek city cruisers,
          <br /> we assemble vehicles that traverse the varied landscapes of our{' '}
          <br /> beautiful continent
        </p>
        <div className='overlay-div'></div>
      </main>
    </>
  );
};

export default Hero;
