import React from 'react';
import logo from '../assets/images/logo.svg';
import logoSmall from '../assets/images/logo-small.svg';

function App() {
  return (
    <header className="header">
      <div className="content-wrapper header__wrapper">
        <a href="/">
          <img className="header__logo header__logo--full" src={logo} alt="Название сайта"/>
          <img className="header__logo header__logo--small" src={logoSmall} alt="Название сайта"/>
        </a>
        <a className="header__link-account" href="#">Открыть счет</a>
        <a className="header__phone" href="tel:+78005005545">8 800 500 55 45</a>
        <p className="header__text">
          Финансовые услуги на рынке ценных бумаг для компаний
        </p>
      </div>
    </header>
  );
}

export default App;
