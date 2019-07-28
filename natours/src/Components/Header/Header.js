import React from 'react';
import Logo from '../../img/logo-white.png';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="logo-box">
        <img className="logo" src={Logo} alt="Logo" />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>

        <a href="#" className="btn btn-white btn-animated">Discover our Tours</a>
      </div>
    </header>

  );
}

export default Header;