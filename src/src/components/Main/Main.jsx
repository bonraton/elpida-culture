import React from 'react';
import Header from '../Header';
import Promo from './Promo';
import Actions from './Actions';
import About from './About';
import Contact from './Contact';
import Footer from '../Footer';

export default function Main() {
  return (
    <main className="Main">
      <Header />
      <Promo />
      <Actions />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
