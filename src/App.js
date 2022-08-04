import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Signup from './components/Signup';
import Pricing from './components/Pricing';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Signup />
      <Pricing />
      <Footer />
    </div >
  );
}

export default App;