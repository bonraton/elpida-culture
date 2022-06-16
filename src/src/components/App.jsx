import React, { useEffect } from 'react';
import {
  Routes, Route, useLocation,
} from 'react-router-dom';
import Main from './Main/Main';
import About from './About';
import Membership from './Membership';
import Dontation from './Donation';
import Refugees from './Refugees/Refugees';
import Projects from './Projects';

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <div id="app" className="app">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/donation" element={<Dontation />} />
        <Route path="/refugees" element={<Refugees />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}
