import React from 'react';
// import { Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// import Header from '../Header';
import Main from '../Main';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Main />
      </div>
    </BrowserRouter>
  );
}
