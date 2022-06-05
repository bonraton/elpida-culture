import React from 'react';
import Promo from './Main/Promo';
import Header from './Header';
import Actions from './Main/Actions';

export default function Main() {
  return (
    <main className="Main">
      <Header />
      <Promo />
      <Actions />
    </main>
  );
}
