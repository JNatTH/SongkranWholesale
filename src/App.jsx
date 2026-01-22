import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="app">
      <SEOHead />
      <Header />

      <main>
        <Hero />
        <ProductGrid />
        <Benefits />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
