import React from 'react';
import Promo from './Main/Promo';
import Header from './Header';
import Actions from './Main/Actions';
import About from './Main/About';

export default function Main() {
  return (
    <main className="Main">
      <Header />
      <Promo />
      <Actions />
      <About />
    </main>
  );
}
