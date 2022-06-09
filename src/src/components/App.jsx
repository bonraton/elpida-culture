import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import About from './About';
import Membership from './Membership';
import Dontation from './Donation';
import Refugees from './Refugees/Refugees';
import Projects from './Projects';
// import Popup from './shared/Popup';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/donation" element={<Dontation />} />
          <Route path="/refugees" element={<Refugees />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Popup /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
