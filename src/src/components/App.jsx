import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Main from './Main/Main';
// import About from './About';
// import Membership from './Membership';
// import Dontation from './Donation';
// import Refugees from './Refugees/Refugees';
// import Projects from './Projects';
import Popup from './shared/Popup';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Main /> */}
        {/* <About /> */}
        {/* <Membership /> */}
        {/* <Dontation /> */}
        {/* <Refugees /> */}
        {/* <Projects /> */}
        <Popup />
      </div>
    </BrowserRouter>
  );
}
