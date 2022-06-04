import React from 'react';
// import { Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
      </div>
    </BrowserRouter>
  );
}
