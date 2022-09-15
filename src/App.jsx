import React from 'react';
import Consultation from './components/Consultation';
import HowItWorks from './components/howItWorks';
import News from './components/News';
import Gurantee from './components/Guarantee';
import Reason from './components/Reason/Service';
import Header from './components/Header';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Consult from './components/Consult';
import HeroSection from './components/Hero';
import Service from './components/Reason/Service';
import Why from './components/Why';
import Protect from './components/Protect';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Consult />
      <Why />
      <Reason />
      <Gurantee />
      <HowItWorks />
      <Consultation />
      <Protect />
      <News />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
