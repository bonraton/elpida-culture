import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import fbIcon from '../images/icons/facebook_icon.svg';
import instIcon from '../images/icons/instagram_icon.svg';
import logo from '../images/logos/logo_light.svg';
import { faceBookLink, instagramLink } from '../helpers/constant/links';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer__info-container">
          <p className="footer__title">Elpida Cultural Integration Association</p>
          <p className="footer__text">c/o Nadzeya Kurzava, Gundeldingerstrasse 63, CH-4053 </p>
          <p className="footer__text">Basel, Switzerland</p>
          <p className="footer__text">Mail: association.elpida@gmail.com</p>
          <p className="footer__text">Tel: +41 77 498 43 90</p>
        </div>
        <nav>
          <p className="footer__title">Menu</p>
          <ul className="footer__navigation-container">
            <li><NavLink className={(navData) => (navData.isActive ? 'link link_active' : 'link')} to="/about">About</NavLink></li>
            <li><NavLink className={(navData) => (navData.isActive ? 'link link_active' : 'link')} to="/refugees">Refugees</NavLink></li>
            <li><NavLink className={(navData) => (navData.isActive ? 'link link_active' : 'link')} to="/membership">Membership</NavLink></li>
            <li><NavLink className={(navData) => (navData.isActive ? 'link link_active' : 'link')} to="/donation">Donations</NavLink></li>
            <li><NavLink className={(navData) => (navData.isActive ? 'link link_active' : 'link')} to="/projects">Projects</NavLink></li>
          </ul>
        </nav>
        <div className="footer__social-container">
          <p className="footer__title">Socials</p>
          <ul className="footer__icons">
            <Link
              to={{ pathname: faceBookLink }}
              target="_blank"
            >
              <img className="footer__icon" src={fbIcon} alt="facebook icon" />
            </Link>
            <Link
              to={{ pathname: instagramLink }}
              target="_blank"

            >
              <img className="footer__icon" src={instIcon} alt="instagram icon" />
            </Link>
          </ul>
        </div>
        <Link to="/" className="logo">
          <img className="logo" src={logo} alt="elpida logo" />
        </Link>
        <p className="footer__copyright">&#169; 2023 by CIA ELPIDA</p>
      </div>
    </footer>
  );
}
