import React from 'react';
import Work from '../components/Work';
import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import Navbar from '../components/Navbar';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  )
}

export default Home