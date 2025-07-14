import React from 'react';
import { Hero } from './components/landing/Hero';
import { Features } from './components/landing/Features';
import { HowItWorks } from './components/landing/HowItWorks';
import { Stats } from './components/landing/Stats';
import { Footer } from './components/landing/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;