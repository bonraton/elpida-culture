import { NavLink, Link } from 'react-router-dom';
import { React } from 'react';
import logo from '../images/logos/logo_dark.svg';

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <nav>
        <ul className="navigation">
          <li><NavLink className={(navData) => (navData.isActive ? 'link link_large link_active' : 'link link_large')} to="/about">About</NavLink></li>
          <li><NavLink className={(navData) => (navData.isActive ? 'link link_large link_active' : 'link link_large')} to="/refugees">Refugees</NavLink></li>
          <li><NavLink className={(navData) => (navData.isActive ? 'link link_large link_active' : 'link link_large')} to="/membership">Membership</NavLink></li>
          <li><NavLink className={(navData) => (navData.isActive ? 'link link_large link_active' : 'link link_large')} to="/donation">Donations</NavLink></li>
          <li><NavLink className={(navData) => (navData.isActive ? 'link link_large link_active' : 'link link_large')} to="/projects">Projects</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
