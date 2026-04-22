import React from 'react';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import VideoPortfolio from '../components/VideoPortfolio';
import Photography from '../components/Photography';
import About from '../components/About';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Brands />
      <VideoPortfolio />
      <Photography />
      <About />
    </>
  );
};

export default Home;
