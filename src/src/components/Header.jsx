import { NavLink } from 'react-router-dom';
import { React } from 'react';
import logo from '../images/logos/logo_dark.svg';

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul className="navigation">
          <li><NavLink className={(navData) => (navData.isActive ? 'link link_active' : 'link')} to="/about">About</NavLink></li>
          <li><NavLink className={(navData) => (navData.isActive ? 'link link_active' : 'link')} to="/refugees">Refugees</NavLink></li>
          <li><NavLink className={(navData) => (navData.isActive ? 'link link_active' : 'link')} to="/membership">Membership</NavLink></li>
          <li><NavLink className={(navData) => (navData.isActive ? 'link link_active' : 'link')} to="/donations">Donations</NavLink></li>
          <li><NavLink className={(navData) => (navData.isActive ? 'link link_active' : 'link')} to="/projects">Projects</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
